import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export const SidebarData=[
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/home",
    },
    {
        title:"Vendors",
        icon:<StorefrontIcon />,
        link:"/vendors",
    },
    {
        title:"Purchase Orders",
        icon:< AddShoppingCartIcon />,
        link:"/purchase-orders",
    },
    {
        title:"Bills",
        icon:<ReceiptIcon />,
        link:"/bills",
    },
    {
        title:"Payments Made",
        icon:<PriceCheckIcon/>,
        link:"/payments-made",
    },
    {
        title:"Invoices",
        icon:<ReceiptLongIcon/>,
        link:"/invoices",
    }
];


