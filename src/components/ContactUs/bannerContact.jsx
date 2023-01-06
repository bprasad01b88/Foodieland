import React, { Component } from "react";
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

class BannerContact extends Component {
  state = {
    userData: {
      name: "",
      email: "",
      subject: "",
      enquiryType: "",
      message: "",
    },
    errors: {},
  };

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  schema = {
    name: Joi.string().required().label("name"),
    email: Joi.string().required().label("Email"),
    subject: Joi.string().required().label("Subject"),
    enquiryType: Joi.string().required().label("enquiryType"),
    message: Joi.string().required().label("Message"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.userData, this.schema, options);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;

  };

  doSubmit = async () => {
    const response = await setContact(this.state.userData);
    this.setState({ userData: {
        name: "",
        email: "",
        subject: "",
        enquiryType: "",
        message: "",
      }})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const userData = { ...this.state.userData };
    userData[input.name] = input.value;
    this.setState({ userData, errors });
  };

  render() {
    const { userData, errors } = this.state;
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
            <form onSubmit={this.handleSubmit}>
              <Stack direction={"row"}>
                <Box mr={5}>
                  <InputData
                    name="name"
                    value={userData.name}
                    label="Username"
                    placeholder="Enter Your Name"
                    onChange={this.handleChange}
                    error={errors.name}
                  />
                </Box>

                <Box>
                  <InputData
                    name="email"
                    value={userData.email}
                    label="Email"
                    placeholder="Enter Your Email"
                    onChange={this.handleChange}
                    error={errors.email}
                  />
                </Box>
              </Stack>
              <Stack direction={"row"} mt={10}>
                <Box mr={5}>
                  <InputData
                    name="subject"
                    value={userData.subject}
                    label="Subject"
                    placeholder="Enter Your Subject"
                    onChange={this.handleChange}
                    error={errors.subject}
                  />
                </Box>

                <Box>
                  <SelectBox
                    name="enquiryType"
                    label="enquiryType Type"
                    placeholder="Please select enquiryType type"
                    value={userData.enquiryType}
                    onChange={this.handleChange}
                    error={errors.enquiryType}
                  />
                </Box>
              </Stack>
              <Stack mt={10}>
                <Box>
                  <TextArea
                    name="message"
                    label="Message"
                    placeholder="Enter tour message here...."
                    value={userData.message}
                    onChange={this.handleChange}
                    error={errors.message}
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
                  >
                    Submit
                  </Button>
                </Center>
              </Stack>
              </form>
            </FormControl>
          </Box>
        </Flex>
      </Container>
    );
  }
}

export default BannerContact;
