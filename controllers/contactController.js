const asyncHandler = require("express-async-handler");
const { constants } = require("../constants");
const Contact = require("../models/contactModel");

// desc Get all contacts
// route GET/api/contacts
// access private 
const getContacts = asyncHandler (async(req,res)=>{
    const contacts = await Contact.find({userId: req.user.id});
    res.status(200).json(contacts);
});

// desc Create New contact
// route POST/api/contacts
// access private
const createContact = asyncHandler(async(req,res)=>{
    console.log("The request body is:",req.body);
    const {name, email, phone}=req.body;
    if(!name || !email || !phone){
        res.status(constants.VALIDATION_ERROR);
        return res.json({ error: "All fields are mandatory!" });
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        userId : req.user.id,
    });
    res.status(201).json(contact);
});

// desc Get contact
// route GET/api/contacts/:id
// access private
const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(constants.NOT_FOUND);
        return res.json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
});

// desc update contact
// route PUT/api/contacts/:id
// access private
const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(constants.NOT_FOUND);
        return res.json({ error: "Contact not found" });
    }

    if (contact.userId.toString() !== req.user.id){
        res.status(constants.FORBIDDEN);
        return res.json({ error: "User don't have permission to update other user contacts" });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact);
});

// desc delete contact
// route DELETE/api/contacts/:id
// access private
const deleteContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(constants.NOT_FOUND);
        return res.json({ error: "Contact not found" });
    }
    await Contact.deleteOne({ _id:req.params.id});
    res.status(200).json(contact);
});
module.exports={
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};
