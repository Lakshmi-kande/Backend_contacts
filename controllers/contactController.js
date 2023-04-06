const asyncHandler = require("express-async-handler");
const { constants } = require("../constants");
const Contact = require("../models/contactModel");

// desc Get all contacts
// route GET/api/contacts
// access private 
const getContacts = asyncHandler (async(req,res)=>{
    const contacts = await Contact.find({userId: req.user.id});
    res.status(constants.SUCCESSFULL_REQUEST).json(contacts);
});

// desc Create New contact
// route POST/api/contacts
// access private
const createContact = asyncHandler(async(req,res)=>{
    console.log("The request body is:",req.body);
    const {name, email, phone}=req.body;
    if(!name || !email || !phone){
        throw new Error(constants.VALIDATION_ERROR);
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        userId : req.user.id,
    });
    res.status(constants.SUCCESSFULL_POST).json(contact);
});

// desc Get contact
// route GET/api/contacts/:id
// access private
const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        throw new Error(constants.NOT_FOUND);
    }
    res.status(constants.SUCCESSFULL_REQUEST).json(contact);
});

// desc update contact
// route PUT/api/contacts/:id
// access private
const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        throw new Error(constants.NOT_FOUND);
    }

    if (contact.userId.toString() !== req.user.id){
        throw new Error(constants.FORBIDDEN);
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(constants.SUCCESSFULL_REQUEST).json(updatedContact);
});

// desc delete contact
// route DELETE/api/contacts/:id
// access private
const deleteContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        throw new Error(constants.NOT_FOUND);
    }
    await Contact.deleteOne({ _id:req.params.id});
    res.status(constants.SUCCESSFULL_REQUEST).json(contact);
});
module.exports={
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};
