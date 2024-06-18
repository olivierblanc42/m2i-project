export class Cart {

    private _id!: number;
    private _createdAt: Date;
    private _status: string;
    private _idPaymentCart: Object;
    private _idUsers: Object;

    constructor(
        createdAt: Date,
        status: string,
        idPaymentCart: Object,
        idUsers: Object,
        id: number,
    ) {
        this._id=id
        this._createdAt=createdAt
        this._status=status
        this._idPaymentCart=idPaymentCart
        this._idUsers=idUsers
    }

    static fromJSON(data: any){
        return new Cart(
            data.id,
            data.createdAt,
            data.status,
            data.idPaymentCart,
            data.idUsers,
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
     * Getter createdAt
     * @return {Date}
     */
	public get createdAt(): Date {
		return this._createdAt;
	}

    /**
     * Getter status
     * @return {string}
     */
	public get status(): string {
		return this._status;
	}

    /**
     * Getter idPaymentCart
     * @return {Object}
     */
	public get idPaymentCart(): Object {
		return this._idPaymentCart;
	}

    /**
     * Getter idUsers
     * @return {Object}
     */
	public get idUsers(): Object {
		return this._idUsers;
	}

    /**
     * Setter createdAt
     * @param {Date} value
     */
	public set createdAt(value: Date) {
		this._createdAt = value;
	}

    /**
     * Setter status
     * @param {string} value
     */
	public set status(value: string) {
		this._status = value;
	}

    /**
     * Setter idPaymentCart
     * @param {Object} value
     */
	public set idPaymentCart(value: Object) {
		this._idPaymentCart = value;
	}

    /**
     * Setter idUsers
     * @param {Object} value
     */
	public set idUsers(value: Object) {
		this._idUsers = value;
	}

}