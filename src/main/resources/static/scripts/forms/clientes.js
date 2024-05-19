let clientForm = {
    id: null, name: "", cpf: "", cnpj: "", company: "", inactive: false, address: {
        id: null, street: "", zip_code: "", number: null, city: {
            id: null
        }
    }
}
let isEditing = false;

// Restaura o formul�rio para o padr�o
function resetForm() {
    clientForm = {
        id: null,
        name: "",
        cpf: "",
        cnpj: "",
        company: "",
        email: "",
        whatsapp: "",
        cellphone: "",
        telephone: "",
        inactive: false,
        address: {
            id: null, street: "", zip_code: "", number: null, city: {
                id: null
            }
        }
    }
}

// Preenche os campos do modal com os dados do cliente a ser editado
function fillFields(client) {
    resetForm();
    clientForm.id = client.id;
    clientForm.address.id = client.address.id;
    nameInput.value = client.name;
    cpfInput.value = client.cpf;
    companyInput.value = client.company;
    cnpjInput.value = client.cnpj;
    emailInput.value = client.email;
    whatsappInput.value = client.whatsapp;
    cellphoneInput.value = client.cellphone;
    telephoneInput.value = client.telephone;
    streetInput.value = client.address.street;
    numberInput.value = client.address.number;
    zipCodeInput.value = client.address.zip_code;
    stateSelect.value = client.address.city.state.id;
    stateSelect.classList.remove('unselected')
    getCitiesByState(client.address.city.state.id).then(() => {
        citySelect.value = client.address.city.id;
        citySelect.disabled = false;
        citySelect.classList.remove('unselected')
    });

    cpfInput.dispatchEvent(new Event('input'));
    cnpjInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('input'));
    whatsappInput.dispatchEvent(new Event('input'));
    cellphoneInput.dispatchEvent(new Event('input'));
    telephoneInput.dispatchEvent(new Event('input'));
    numberInput.dispatchEvent(new Event('input'));
    zipCodeInput.dispatchEvent(new Event('input'));
}

// Limpa os avisos de erro dos campos do modal
function cleanInvalidClasses() {
    nameInput.parentElement.classList.remove('invalid');
    cpfInput.parentElement.classList.remove('invalid');
    companyInput.parentElement.classList.remove('invalid');
    cnpjInput.parentElement.classList.remove('invalid');
    emailInput.parentElement.classList.remove('invalid');
    whatsappInput.parentElement.classList.remove('invalid');
    cellphoneInput.parentElement.classList.remove('invalid');
    telephoneInput.parentElement.classList.remove('invalid');
    streetInput.parentElement.classList.remove('invalid');
    numberInput.parentElement.classList.remove('invalid');
    zipCodeInput.parentElement.classList.remove('invalid');
    stateSelect.classList.remove('invalid');
    citySelect.classList.remove('invalid');
}

// Reinicia os campos do modal
function resetFields() {
    nameInput.value = "";
    cpfInput.value = "";
    companyInput.value = "";
    cnpjInput.value = "";
    emailInput.value = "";
    whatsappInput.value = "";
    cellphoneInput.value = "";
    telephoneInput.value = "";
    streetInput.value = "";
    numberInput.value = "";
    zipCodeInput.value = "";
    stateSelect.value = 0;
    stateSelect.classList.add('unselected')
    citySelect.value = 0;
    citySelect.disabled = true;
    citySelect.classList.add('unselected')
}

// Coloca m�scaras nos inputs do modal
function setInputMasks() {
    const cpfMask = {
        mask: '000.000.000-00'
    };
    const cnpjMask = {
        mask: '00.000.000/0000-00'
    }
    const numberMask = {
        mask: '0000000'
    }
    const zipCodeMask = {
        mask: '00000-000'
    }
    // TODO adicionar mais tipos de telefones compat�veis (internacionais?)
    const cellphoneMask = {
        mask: '00 00000-0000'
    }
    IMask(cpfInput, cpfMask);
    IMask(cnpjInput, cnpjMask);
    IMask(numberInput, numberMask);
    IMask(zipCodeInput, zipCodeMask);
    IMask(whatsappInput, cellphoneMask);
    IMask(cellphoneInput, cellphoneMask);
    IMask(telephoneInput, cellphoneMask);
}

// Valida os inputs do modal de clientes
function validateClientForm() {
    cleanInvalidClasses();
    let isFormValid = true;

    if (nameInput.value.trim() !== "") {
        clientForm.name = nameInput.value;
    } else {
        clientForm.name = null;
        nameInput.parentElement.classList.add('invalid');
        isFormValid = false;
    }

    const unmaskedCpf = cpfInput.value.replace(/\D+/g, '');
    if (validadeCpf(unmaskedCpf)) {
        clientForm.cpf = unmaskedCpf;
    } else {
        cpfInput.parentElement.classList.add('invalid');
        isFormValid = false;
    }

    if (companyInput.value.trim() !== "") {
        clientForm.company = companyInput.value;
    } else {
        companyInput.parentElement.classList.add('invalid');
        isFormValid = false;
    }

    const unmaskedCnpj = cnpjInput.value.replace(/\D+/g, '');
    if (validadeCnpj(unmaskedCnpj)) {
        clientForm.cnpj = unmaskedCnpj;
    } else {
        cnpjInput.parentElement.classList.add('invalid');
        isFormValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Express�o regular para validar o e-mail
    if (emailInput.value.trim() !== "") {
        if (emailRegex.test(emailInput.value.trim())) {
            clientForm.email = emailInput.value.trim();
        } else {
            emailInput.parentElement.classList.add('invalid');
            isFormValid = false;
        }
    }

    const unmaskedWhatsapp = whatsappInput.value.replace(/\D+/g, '');
    if (unmaskedWhatsapp.length === 11 || unmaskedWhatsapp.length === 0) {
        clientForm.whatsapp = unmaskedWhatsapp;
    } else {
        whatsappInput.parentElement.classList.add('invalid');
        isFormValid = false;
    }

    const unmaskedCellphone = cellphoneInput.value.replace(/\D+/g, '');
    if (unmaskedCellphone.length === 11 || unmaskedCellphone.length === 0) {
        clientForm.cellphone = unmaskedCellphone;
    } else {
        cellphoneInput.parentElement.classList.add('invalid');
        isFormValid = false;
    }

    const unmaskedTelephone = telephoneInput.value.replace(/\D+/g, '');
    if (unmaskedTelephone.length === 11 || unmaskedTelephone.length === 0) {
        clientForm.telephone = unmaskedTelephone;
    } else {
        telephoneInput.parentElement.classList.add('invalid');
        isFormValid = false;
    }

    if (streetInput.value.trim() !== "") {
        clientForm.address.street = streetInput.value;
    }

    const numberValue = parseInt(numberInput.value.trim());
    if (!isNaN(numberValue)) {
        clientForm.address.number = numberValue;
    }

    const unmaskedZipCode = zipCodeInput.value.replace(/\D+/g, '');
    if (unmaskedZipCode.length === 8) {
        clientForm.address.zip_code = unmaskedZipCode;
    } else if (unmaskedZipCode.length === 0) {
        clientForm.address.zip_code = null;
    } else {
        zipCodeInput.parentElement.classList.add('invalid');
    }

    const stateIdValue = parseInt(stateSelect.value.trim());
    if (stateIdValue === null || stateIdValue === 0) {
        stateSelect.classList.add('invalid');
        isFormValid = false;
    }

    const cityIdValue = parseInt(citySelect.value.trim());
    if (cityIdValue === null || cityIdValue === 0) {
        citySelect.classList.add('invalid');
        isFormValid = false;
    } else {
        clientForm.address.city.id = cityIdValue;
    }

    return isFormValid;
}

// Salva um novo cliente ou sua edi��o
async function saveClient() {
    if (!validateClientForm()) return;

    try {
        const response = await fetch(`${URL}/client`, {
            method: isEditing ? 'PUT' : 'POST', headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(clientForm),
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.error('Erro: ' + responseData.message);
            return;
        } else {
            await getOneClient(responseData.id, isEditing);
        }

        switchOverlay();
    } catch (error) {
        console.error(isEditing ? 'Erro ao editar cliente:' : 'Erro ao criar cliente:', error);
    }
}
