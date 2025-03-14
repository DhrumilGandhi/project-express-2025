const asyncHandler = require('express-async-handler');

//@desc Get all contact
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req,res)=> {
    res.status(200).json({message : 'Get all contact'});
});

//@desc Get all contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req,res)=> {
    res.status(200).json({message : `Get contact ${req.params.id}`});
});

//@desc Create contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req,res)=> {
    console.log('The request body is', req.body)
    const {name, email, phone} = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fildes are mandatory")
    }
    res.status(201).json({message : 'create contact'});
});

//@desc update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req,res)=> {
    res.status(200).json({message : `update contact ${req.params.id}`});
});

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req,res)=> {
    res.status(200).json({message : `delete contact ${req.params.id}`});
});

module.exports = {
    getContacts : getContacts,
    getContact : getContact,
    createContact : createContact,
    updateContact : updateContact,
    deleteContact : deleteContact
};