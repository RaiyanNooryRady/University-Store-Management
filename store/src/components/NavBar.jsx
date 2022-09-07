
import { AppBar,Toolbar,styled,Button,InputLabel,Input} from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background: #E74C3C
`;
const Tabs = styled(NavLink)`
font-weight:700;
margin-right:20px;
cursor: pointer;
color:inherit;
text-decoration:none;
`;
const SearchLabel= styled(InputLabel)`
font-weight:700;
margin-right:20px;
cursor: pointer;
color:inherit;
text-decoration:none;

`
const InputBox =styled(Input)`
font-weight:700;
margin-right:20px;
cursor: pointer;
color:inherit;
text-decoration:none;

`

const NavBar = () => {

    return(
        <Header position="static">
    
            <Toolbar>
                <Tabs to='/'>Store Management System</Tabs>
                <Tabs to='/all'>All Items</Tabs>
                <Tabs to= '/add'>Purchase New Item</Tabs>

                <SearchLabel> From Date: </SearchLabel>
                <InputBox type="date"/>
                <SearchLabel> To Date:  </SearchLabel>
                <InputBox type="date"/>
                <Button variant="contained" color="success" > Search</Button>
            </Toolbar>
        
        </Header>
        
    );
}
export default NavBar; 