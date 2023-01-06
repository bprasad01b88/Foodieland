import React, { useState } from "react";
import Joi, { schema } from "joi-browser";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Heading,
  Img,
  Stack,
} from "@chakra-ui/react";
import chefImg from "../../Images/Cook-contact.png";
import InputData from "../common/Input";
import SelectBox from "../common/SelectBox";
import TextArea from "../common/TextArea";
import { setContact } from "../../utils/contactService";
import { useEffect } from "react";

function ContactBanner(props) {
  const [contact, setContacts] = useState({
    name: "",
    email: "",
    subject: "",
    enquiryType: "",
    message: "",
  });

  // useEffect(()=> {
  //   window.scrollTo(0, 0);
  // }, [])


  schema = {
    name: Joi.string().required(),
    email: Joi.string().required(),
    subject: Joi.string().required(),
    enquiryType: Joi.string().required(),
    message: Joi.string().required(),
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(contact, schema, options);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const doSubmit = async () => {
    const response = await setContact(contact);
    setContacts({ contact: {
      name: "",
      email: "",
      subject: "",
      enquiryType: "",
      message: "",
    }})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors({ errors: errors || {} })

    if (errors) return;
    doSubmit();
    console.log("Submitted");
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name] : value };
    const schemas = { [name] : schema[name]};
    const { error } = Joi.validate(obj, schemas);
    return error ? error.details[0].message : null;
    
   };
 
   const handleChange = ({ currentTarget: input }) => {

     const errorMsg = { ...errors };
     const errorMessage = validateProperty(input);
     if (errorMessage) errorMsg[input.name] = errorMessage;
     else delete errorMsg[input.name];
 
    const contacts = {...contact};
     contacts[input.name] = input.value;
     setContacts( contacts, errorMsg )
     
   };


  return (
    <Container maxW={1080} mx={"auto"} mt={20}>
      <Stack>
        <Center>
          <Heading fontSize={"6xl"} fontWeight={800}>
            Contact us
          </Heading>
        </Center>
      </Stack>
      <Flex mt={20}>
        <Box bgGradient="linear(to-b, white.0, blue.100)" borderRadius={30}>
          <Img src={chefImg} />
        </Box>
        <Box mx={20}>
          <FormControl>
          <form onSubmit={handleSubmit}>
            <Stack direction={"row"}>
              <Box mr={5}>
                <InputData
                  name="name"
                  value={contact.name}
                  label="name"
                  placeholder="Enter Your Name"
                  onChange={handleChange}
                  error={errors.errors && errors.errors.name}
                />
              </Box>

              <Box>
                <InputData
                  name="email"
                  value={contact.email}
                  label="Email"
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                  error={errors.errors && errors.errors.email}
                />
              </Box>
            </Stack>
            <Stack direction={"row"} mt={10}>
              <Box mr={5}>
                <InputData
                  name="subject"
                  value={contact.subject}
                  label="Subject"
                  placeholder="Enter Your Subject"
                  onChange={handleChange}
                  error={errors.errors && errors.errors.subject}
                />
              </Box>

              <Box>
                <SelectBox
                  name="enquiryType"
                  label="enquiryType Type"
                  placeholder="Advertisement"
                  value={contact.enquiryType}
                  onChange={handleChange}
                  error={errors.errors && errors.errors.enquiryType}
                />
              </Box>
            </Stack>
            <Stack mt={10}>
              <Box>
                <TextArea
                  name="message"
                  label="Message"
                  placeholder="Enter tour message here...."
                  value={contact.message}
                  onChange={handleChange}
                  error={errors.errors && errors.errors.message}
                />
              </Box>
            </Stack>
            <Stack mt={5}>
              <Center>
                <Button
                  type="submit"
                  name="submit"
                  bgColor={"#000"}
                  color={"#fff"}
                  size={"lg"}
                  w={150}
                  borderRadius={10}
                  
                >Submit</Button>
              </Center>
            </Stack>
            </form>
          </FormControl>
        </Box>
      </Flex>
    </Container>
  );
}

export default ContactBanner;
