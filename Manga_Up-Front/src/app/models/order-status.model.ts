export class OrdersStatus {

    private _id!: number;
    private _label: string;

    constructor(
        label: string,
        id: number,
    ) {
        this._id=id;
        this._label=label;
    }

    static fromJSON(data: any){
        return new OrdersStatus(
            data.id,
            data.label,
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
     * Setter label
     * @param {string} value
     */
	public set label(value: string) {
		this._label = value;
	}
}