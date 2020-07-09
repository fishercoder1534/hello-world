import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    static maxLength(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).length > 30) {
            return { maxLength: true };
        }
        return null;
    }

    // async validator returns a promise
    // use setTimeout() it to simuate a call to an HTTP service to make it async
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Steve')
                    resolve({ shouldBeUnique: true });
                 else
                 resolve(null);
                }, 2000)
        });
    }
}