export class Author{
    private _id!: number; 
    private _lastname: string; 
    private _firstname: string; 
    private _description: string; 
    private _createdAt: Date; 

	constructor(
        lastname: string,
        firstname: string,
        description: string,
        createdAt: Date,
        id: number,
    ) {
        this._lastname=lastname;
        this._firstname=firstname;
        this._description=description;
        this._createdAt=createdAt;
        this._id=id;
	}

    static fromJSON(data: any){
        return new Author(
            data.lastname, 
            data.firstname, 
            data.description, 
            data.createdAt, 
            data.id
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
     * Getter lastname
     * @return {string}
     */
	public get lastname(): string {
		return this._lastname;
	}

    /**
     * Getter firstname
     * @return {string}
     */
	public get firstname(): string {
		return this._firstname;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter createdAt
     * @return {Date}
     */
	public get createdAt(): Date {
		return this._createdAt;
	}

    /**
     * Setter lastname
     * @param {string} value
     */
	public set lastname(value: string) {
		this._lastname = value;
	}

    /**
     * Setter firstname
     * @param {string} value
     */
	public set firstname(value: string) {
		this._firstname = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter createdAt
     * @param {Date} value
     */
	public set createdAt(value: Date) {
		this._createdAt = value;
	}
}