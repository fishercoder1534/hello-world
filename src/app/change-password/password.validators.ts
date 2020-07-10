import { AbstractControl } from "@angular/forms";

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234') {
                resolve({invalidOldPassword: true});
            } else {
                resolve(null);
            }
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        console.log("newPassword: " + newPassword.value);
        console.log("confirmPassword: " + confirmPassword.value);
        if (newPassword !== confirmPassword) {
            return { passwordsShouldMatch: true };
        }
        return null;
    }
}