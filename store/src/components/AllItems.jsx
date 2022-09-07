import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material'
import { getItems,deleteItem } from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`

  width:100%;
  margin:0px auto 0 auto;

`
const THead = styled(TableRow)`

  background: #fff;
  &>th{
    color: black;
    font-weight:bold;
  }

`

const AllItems = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllItems();
    }, []);

    const getAllItems = async () => {
        let response = await getItems();
        setItems(response.data);
    }
    const deleteItemDetails =async (id) => {
        await deleteItem (id);
        getAllItems();
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Item Name</TableCell>
                    <TableCell>Item Code</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total Price</TableCell>
                    <TableCell>Dept. Name</TableCell>
                    <TableCell>Issue Date</TableCell>
                    <TableCell>Purchase Date</TableCell>
                    <TableCell>Invoice Number</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Update</TableCell>
                </THead>

            </TableHead>
            <TableBody>
                {
                    items.map(item => (
                        <TableRow key={item._id}>
                            <TableCell>{item._id}</TableCell>
                            <TableCell>{item.item_name}</TableCell>
                            <TableCell>{item.item_code}</TableCell>
                            <TableCell>{item.item_category}</TableCell>
                            <TableCell>{item.item_qty}</TableCell>
                            <TableCell>{item.item_qty * item.per_item_price + item.transport_cost + item.other_cost}</TableCell>
                            <TableCell>{item.dept_name}</TableCell>
                            <TableCell>{item.issue_date}</TableCell>
                            <TableCell>{item.purchase_date}</TableCell>
                            <TableCell>{item.invoice_no}</TableCell>
                            <TableCell>{item.item_status}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginBottom:10}} color="success" component={Link} to={`/edit/${item._id}`}>Edit</Button>
                                <Button variant="contained" onClick={()=>deleteItemDetails(item._id)} >Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </StyledTable>

    );
}
export default AllItems;