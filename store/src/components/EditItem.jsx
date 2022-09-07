import { useState, useEffect } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { editItem, getItem } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`

    width:50%;
    margin: 3% auto;
    & > div, button{
        margin-top:20px;
    }

`;
const defaultValue = {
    item_name: '',
    item_code: '',
    item_category: '',
    item_qty: '',
    per_item_price: '',
    transport_cost: '',
    other_cost: '',
    dept_name: '',
    voucher_no: '',
    issue_date: '',
    purchase_date: '',
    invoice_no: '',
    short_note: '',
    item_status: ''
}

const EditItem = () => {

    const [item, setItem] = useState(defaultValue);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadItemDetails();
    }, []);

    const loadItemDetails = async () => {
        const response = await getItem(id);
        setItem(response.data);
    }

    const onValueChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    }
    const editItemDetails = async () => {
        await editItem(item,id);
        navigate('/all');

    }

    return (
        <Container>
            <Typography variant="h4">Edit Item Details</Typography>
            <FormControl>
                <InputLabel>Item Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="item_name" value={item.item_name} />
            </FormControl>
            <FormControl>
                <InputLabel>Item Code</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="item_code" value={item.item_code} />
            </FormControl>
            <FormControl>
                <InputLabel>Item Category</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="item_category" value={item.item_category} />
            </FormControl>
            <FormControl>
                <InputLabel>Item Quantity</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name="item_qty" value={item.item_qty} />
            </FormControl>
            <FormControl>
                <InputLabel>Per Item Price</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name="per_item_price" value={item.per_item_price} />
            </FormControl>
            <FormControl>
                <InputLabel>Transport Cost</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name="transport_cost" value={item.transport_cost} />
            </FormControl>
            <FormControl>
                <InputLabel>Other Cost</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name="other_cost" value={item.other_cost} />
            </FormControl>
            <FormControl>
                <InputLabel>Department Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="dept_name" value={item.dept_name} />
            </FormControl>
            <FormControl>
                <InputLabel>Invoice No</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name="invoice_no" value={item.invoice_no} />
            </FormControl>
            <FormControl>
                <InputLabel>Issue Date</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name="issue_date" value={item.issue_date} />
            </FormControl>
            <FormControl>
                <InputLabel>Purchase Date</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name="purchase_date" value={item.purchase_date} />
            </FormControl>
            <FormControl>
                <InputLabel>Short Note</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="short_note" value={item.short_note} />
            </FormControl>
            <FormControl>
                <InputLabel>Item Status</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="item_status" value={item.item_status} />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="success" onClick={() => editItemDetails()} >Submit</Button>
            </FormControl>
        </Container>
    )
}
export default EditItem;
