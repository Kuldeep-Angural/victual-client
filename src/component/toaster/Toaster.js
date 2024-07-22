import { Alert, Snackbar } from '@mui/material';
import React, { useState, forwardRef, useImperativeHandle } from 'react';

const Toaster = forwardRef(({ title, x, y, type }, ref) => {
    const [open, setOpen] = useState(false);
    const [messageData, setmessageData] = useState({});

    useImperativeHandle(ref,() => ({
            showToast: ({ messageText, messageType }) => {
                setmessageData({ messageText, messageType });
                setOpen(true);
            },
        }),
        []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Snackbar sx={{ borderRadius: '0px' }} open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={messageData?.position ? { ...messageData?.position } : { vertical: 'top', horizontal: 'center' }}>
                <Alert color='primary' onClose={handleClose} severity={messageData.messageType || 'success'} variant="filled" sx={{ width: '400px', boxShadow: 6, borderRadius: '0px' }}>
                    {messageData?.messageText || 'Default toast'}
                </Alert>
            </Snackbar>
        </div>
    );
});

export default Toaster;
