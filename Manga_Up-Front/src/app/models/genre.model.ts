export class Genre {
    private _id!: number;
    private _label: string;
    private _createdDate: Date;


	constructor(id: number, label: string, createdDate: Date) {
		this._id = id;
		this._label = label;
		this._createdDate = createdDate;
	}

    static fromJSON(data: any){
        return new Genre(
            data.id,
            data.label,
            data.createdDate,
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
     * Getter createdDate
     * @return {Date}
     */
	public get createdDate(): Date {
		return this._createdDate;
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
     * Setter createdDate
     * @param {Date} value
     */
	public set createdDate(value: Date) {
		this._createdDate = value;
	}

}