export class Manga {

    private _id!: number;
    private _title: string;
    private _releaseDate: Date;
    private _summary: string;
    private _createdAt: Date;
    private _price: number;
    private _pointFidelity: number;
    private _idCategory: Object;


	constructor(id: number, title: string, releaseDate: Date, summary: string, createdAt: Date, price: number, pointFidelity: number, idCategory: Object) {
		this._id = id;
		this._title = title;
		this._releaseDate = releaseDate;
		this._summary = summary;
		this._createdAt = createdAt;
		this._price = price;
		this._pointFidelity = pointFidelity;
		this._idCategory = idCategory;
	}

    static fromJSON(data: any){
        return new Manga(
            data.id,
            data.title,
            data.releaseDate,
            data.summary,
            data.createdAt,
            data.price,
            data.pointFidelity,
            data.idCategory
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
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter releaseDate
     * @return {Date}
     */
	public get releaseDate(): Date {
		return this._releaseDate;
	}

    /**
     * Getter summary
     * @return {string}
     */
	public get summary(): string {
		return this._summary;
	}

    /**
     * Getter createdAt
     * @return {Date}
     */
	public get createdAt(): Date {
		return this._createdAt;
	}

    /**
     * Getter price
     * @return {number}
     */
	public get price(): number {
		return this._price;
	}

    /**
     * Getter pointFidelity
     * @return {number}
     */
	public get pointFidelity(): number {
		return this._pointFidelity;
	}

    /**
     * Getter idCategory
     * @return {Object}
     */
	public get idCategory(): Object {
		return this._idCategory;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter releaseDate
     * @param {Date} value
     */
	public set releaseDate(value: Date) {
		this._releaseDate = value;
	}

    /**
     * Setter summary
     * @param {string} value
     */
	public set summary(value: string) {
		this._summary = value;
	}

    /**
     * Setter createdAt
     * @param {Date} value
     */
	public set createdAt(value: Date) {
		this._createdAt = value;
	}

    /**
     * Setter price
     * @param {number} value
     */
	public set price(value: number) {
		this._price = value;
	}

    /**
     * Setter pointFidelity
     * @param {number} value
     */
	public set pointFidelity(value: number) {
		this._pointFidelity = value;
	}

    /**
     * Setter idCategory
     * @param {Object} value
     */
	public set idCategory(value: Object) {
		this._idCategory = value;
	}
    
}