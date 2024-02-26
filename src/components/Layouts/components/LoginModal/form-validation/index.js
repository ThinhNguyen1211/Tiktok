const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function Validator(formSelector) {
    // hàm return về phần tử cha của selector
    function getParent(e, selector) {
        while (e.parentElement) {
            if (e.parentElement.matches(selector)) {
                return e.parentElement;
            } else {
                e = e.parentElement;
            }
        }
    }
    // get value của password để làm confirm
    function getConfirmValue() {
        return $('#password').value;
    }

    var formRules = {};
    var validatorRules = {
        required: (value) => {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: (value) => {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
            return regex.test(value) ? undefined : 'Nhập địa chỉ email hợp lệ';
        },
        minPassword: (min) => {
            const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
            return (value) => {
                if (value.length >= min && regex.test(value)) {
                    return undefined;
                } else if (value.length >= min && !regex.test(value)) {
                    return 'Mật khẩu phải bao gồm các chữ cái, số và ký tự đặc biệt';
                } else {
                    return `Vui lòng nhập tối thiểu ${min} ký tự`;
                }
            };
        },
        minUsername: (min) => {
            return (value) => {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
            };
        },
        confirmed: (value) => {
            return value === getConfirmValue() ? undefined : `Giá trị nhập vào không trùng khớp`;
        },
    };
    // lấy ra element trong DOM
    const formElement = $(formSelector);
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            var rules = input.getAttribute('rules').split('|'); // tách các rules có dấu |
            for (var rule of rules) {
                // lặp để lấy các rule sau khi tách bởi dấu | ra
                var isRuleHasValue = rule.includes(':');
                var ruleInfo;
                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }
                var ruleFunc = validatorRules[rule];
                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            // Lắng nghe sự kiện để validate ( blur, change, ...)
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }
        // Hàm thực hiện validate
        function handleValidate(e) {
            var rules = formRules[e.target.name];
            for (var rule of rules) {
                var errorMessage = rule(e.target.value);
                if (errorMessage) break;
            }
            if (errorMessage) {
                var formGroup = getParent(e.target, '.LoginModal_form-group__DXyDE');
                if (formGroup) {
                    var formInput = formGroup.querySelector('.LoginModal_form-control__GHbdA');
                    formInput.style.border = '1px solid var(--primary-color)';
                    formInput.style.color = 'var(--primary-color)';
                    var formMessage = formGroup.querySelector('.LoginModal_form-message__I4Jk3');
                    if (formMessage) {
                        formMessage.innerHTML = errorMessage; // hiện lỗi ra ngoài
                    }
                }
            }

            return !errorMessage; // nếu có message thì return false, nếu kh có thì return true
        }
        // Hàm clear messages lỗi khi oninput
        function handleClearError(e) {
            var formGroup = getParent(e.target, '.LoginModal_form-group__DXyDE');
            if (formGroup) {
                var formInput = formGroup.querySelector('.LoginModal_form-control__GHbdA');
                formInput.style.border = '1px solid rgba(22, 24, 35, 0.12)';
                formInput.style.color = 'rgb(22,24,35)';
                var formMessage = formGroup.querySelector('.LoginModal_form-message__I4Jk3');
                if (formMessage) {
                    formMessage.innerHTML = '';
                }
            }
        }
    }
    // Hàm thực hiện validate
    function handleValidate(e) {
        var rules = formRules[e.target.name];
        for (var rule of rules) {
            var errorMessage = rule(e.target.value);
            if (errorMessage) break;
        }
        if (errorMessage) {
            var formGroup = getParent(e.target, '.LoginModal_form-group__DXyDE');
            if (formGroup) {
                var formInput = formGroup.querySelector('.LoginModal_form-control__GHbdA');
                formInput.classList.add('invalid');
                var formMessage = formGroup.querySelector('.LoginModal_form-message__I4Jk3');
                if (formMessage) {
                    formMessage.innerHTML = errorMessage; // hiện lỗi ra ngoài
                }
            }
        }

        return !errorMessage; // nếu có message thì return false, nếu kh có thì return true
    }
    // Xử lý hành vi submit form
    formElement.onsubmit = (e) => {
        e.preventDefault();
        var inputs = formElement.querySelectorAll('[name][rules]'); // get ra tất cả thẻ input
        var isValid = true;
        for (var input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false;
            }
        }
        // Khi không có lỗi thì submit form
        if (isValid) {
            if (typeof this.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                var formValues = Array.from(enableInputs).reduce((values, input) => {
                    switch (input.type) {
                        case 'radio': // chỉ chọn được 1 cái trong các lựa chọn
                            values[input.name] = formElement.querySelector(
                                'input[name="' + input.name + '"]:checked',
                            ).value;
                            break;
                        case 'checkbox': // chọn được nhiều cái
                            if (!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            }
                            if (input.matches(':checked')) {
                                values[input.name].push(input.value);
                            }
                            break;
                        case 'file':
                            values[input.name] = input.files;
                            break;
                        default:
                            values[input.name] = input.value;
                            break;
                    }
                    return values;
                }, {});
                this.onSubmit(formValues);
            } else {
                formElement.submit();
            }
        }
    };
}

export default Validator;
