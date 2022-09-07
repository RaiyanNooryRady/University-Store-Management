import mongoose from "mongoose";

import autoIncrement from "mongoose-auto-increment";

const itemSchema = mongoose.Schema({

    item_name: String,
    item_code: String,
    item_category: String,
    item_qty: Number,
    per_item_price: Number,
    transport_cost: Number,
    other_cost: Number,
    dept_name: String,
    issue_date: Date,
    purchase_date: Date,
    invoice_no:Number,
    short_note: String,
    item_status:String

});

autoIncrement.initialize(mongoose.connection);
itemSchema.plugin(autoIncrement.plugin,'item');

const item= mongoose.model('item',itemSchema);
export default item;
