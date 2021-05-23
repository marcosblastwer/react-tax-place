export default class Validation {
  readonly message: string = ''
  readonly isValid: boolean = true
  
  constructor(_message: string | undefined = undefined) {
    this.message = !!_message ? _message : ''
    this.isValid = !this.message
  }
}
