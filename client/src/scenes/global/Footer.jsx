import React from 'react'
import { useTheme, Box, Typography } from '@mui/material'
import { shades } from '../../theme'


export default function Footer() {

    const { palette: { neutral } } = useTheme();

    return (
        <Box marginTop='70px' p='40px' backgroundColor={neutral.light} >
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width='clamp(20%, 30%, 40%)'>
                    <Typography
                        variant='h4'
                        fontWeight='bold'
                        mb='30px'
                        color={shades.secondary[500]}
                    >
                        ECOMMERCE
                    </Typography>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, totam? Recusandae accusamus excepturi voluptatem illum esse commodi, quibusdam beatae incidunt deleniti iste, adipisci dolor fugit, culpa saepe? Vitae, tempore perspiciatis.
                    </div>
                </Box>
                <Box>
                    <Typography variant='h4' fontWeight='bold' mb='30px' >
                        About Us
                    </Typography>
                    <Typography mb='30px'>Careers</Typography>
                    <Typography mb='30px'>Our Store</Typography>
                    <Typography mb='30px'>Terms & Conditions</Typography>
                    <Typography mb='30px'>Privacy Policy</Typography>
                </Box>
                <Box>
                    <Typography variant='h4' fontWeight='bold' mb='30px' >
                        Customer Care
                    </Typography>
                    <Typography mb='30px'>Help Center</Typography>
                    <Typography mb='30px'>Track Your Order</Typography>
                    <Typography mb='30px'>Corporate & Bulk Purchasing</Typography>
                    <Typography mb='30px'>Returns & Refunds</Typography>
                </Box>
                <Box width='clamp(20%, 25%, 30%)'>
                    <Typography variant='h4' fontWeight='bold' mb='30px' >
                        Contact Us
                    </Typography>
                    <Typography mb='30px'> Store Address</Typography>
                    <Typography mb='30px'>Store Email</Typography>
                    <Typography mb='30px'>(111)222-3333</Typography>
                </Box>
            </Box>

        </Box>
    )
}
