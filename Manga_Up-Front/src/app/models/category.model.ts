export class Category {
    private _id!: number; 
    private _name: string;
    private _description: string;
    private _createdAt: Date;


	constructor(name: string, description: string, createdAt: Date, id: number) {
		this._name = name;
		this._description = description;
		this._createdAt = createdAt;
		this._id = id;
	}

    static fromJSON(data: any){
        return new Category(
            data._name,
            data._description,
            data._createdAt,
            data._id,
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
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
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
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
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