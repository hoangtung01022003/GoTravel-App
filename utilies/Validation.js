export const isValidPhone = (stringPhone) => (/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(stringPhone));
export const isValidEmail = (stringEmail)=> (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))
export const isValidName = (stringName)=> stringName.length > 0
export const isValidPassword = (stringPassword)=> stringPassword.length > 0
