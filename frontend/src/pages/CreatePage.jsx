import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { useToast } from "@chakra-ui/react";

export const CreatePage = () => {
  const [newProduct, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }

    setProduct({ name: "", price: "", image: "" });
  };

  return (
    <>
      <Container maxW={"container.sm"}>
        <VStack spacing={8} py={5}>
          <Heading as={"h1"} size={"2xl"} textAlign={"center"}>
            Create New Product
          </Heading>
          <Box
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            p={6}
            rounded={"lg"}
            shadow={"md"}
          >
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setProduct({ ...newProduct, name: e.target.value })
                }
              ></Input>

              <Input
                placeholder="Price"
                name="price"
                value={newProduct.price}
                onChange={(e) =>
                  setProduct({ ...newProduct, price: e.target.value })
                }
              ></Input>

              <Input
                placeholder="Image URL"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setProduct({ ...newProduct, image: e.target.value })
                }
              ></Input>
              <Button colorschema="blue" onClick={handleAddProduct} w="full">
                Add Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default CreatePage;
