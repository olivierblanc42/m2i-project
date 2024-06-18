export class User {
    private _id!:number;
    private _username: string;
    private _email: string;
    private _password: string;
    private _fisrtname: string;
    private _lastname: string;
    private _createdAt: Date;
    private _idAddresses: Object;
    private _idGenders: Object;


	constructor(
        id: number, 
        username: string, 
        email: string, 
        password: string, 
        fisrtname: string, 
        lastname: string, 
        createdAt: Date, 
        idAddresses: Object, 
        idGenders: Object
    ) {
		this._id = id;
		this._username = username;
		this._email = email;
		this._password = password;
		this._fisrtname = fisrtname;
		this._lastname = lastname;
		this._createdAt = createdAt;
		this._idAddresses = idAddresses;
		this._idGenders = idGenders;
	}

    static fromJSON(data: any){
        return new User(
            data._id,
            data._username,
            data._email,
            data._password,
            data._fisrtname,
            data._lastname,
            data._createdAt,
            data._idAddresses,
            data._idGenders,
        )
    }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter username
     * @return {string}
     */
	public get username(): string {
		return this._username;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter password
     * @return {string}
     */
	public get password(): string {
		return this._password;
	}

    /**
     * Getter fisrtname
     * @return {string}
     */
	public get fisrtname(): string {
		return this._fisrtname;
	}

    /**
     * Getter lastname
     * @return {string}
     */
	public get lastname(): string {
		return this._lastname;
	}

    /**
     * Getter createdAt
     * @return {Date}
     */
	public get createdAt(): Date {
		return this._createdAt;
	}

    /**
     * Getter idAddresses
     * @return {Object}
     */
	public get idAddresses(): Object {
		return this._idAddresses;
	}

    /**
     * Getter idGenders
     * @return {Object}
     */
	public get idGenders(): Object {
		return this._idGenders;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter username
     * @param {string} value
     */
	public set username(value: string) {
		this._username = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public set password(value: string) {
		this._password = value;
	}

    /**
     * Setter fisrtname
     * @param {string} value
     */
	public set fisrtname(value: string) {
		this._fisrtname = value;
	}

    /**
     * Setter lastname
     * @param {string} value
     */
	public set lastname(value: string) {
		this._lastname = value;
	}

    /**
     * Setter createdAt
     * @param {Date} value
     */
	public set createdAt(value: Date) {
		this._createdAt = value;
	}

    /**
     * Setter idAddresses
     * @param {Object} value
     */
	public set idAddresses(value: Object) {
		this._idAddresses = value;
	}

    /**
     * Setter idGenders
     * @param {Object} value
     */
	public set idGenders(value: Object) {
		this._idGenders = value;
	}

}