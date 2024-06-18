export class PaymentCart {
    private _id!: number;
    private _label: string;
    private _createdAt: Date;


	constructor(
        id: number, 
        label: string, 
        createdAt: Date
    ) {
		this._id = id;
		this._label = label;
		this._createdAt = createdAt;
	}

    static fromJSON(data: any){
        return new PaymentCart(
            data.id,
            data.label,
            data.createdAt,
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
     * Getter label
     * @return {string}
     */
	public get label(): string {
		return this._label;
	}

    /**
     * Getter createdAt
     * @return {Date}
     */
	public get createdAt(): Date {
		return this._createdAt;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter label
     * @param {string} value
     */
	public set label(value: string) {
		this._label = value;
	}

    /**
     * Setter createdAt
     * @param {Date} value
     */
	public set createdAt(value: Date) {
		this._createdAt = value;
	}

}