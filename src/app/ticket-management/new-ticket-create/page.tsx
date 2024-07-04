"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Box, Button, Flex, FormLabel, Grid, GridItem } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import RHFInput from "@/components/react-hook-form-elements/RHFInput";
import { FlightDirection } from "@/utils/enums";

const NewTicketCreate = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [flightDirection, setFlightDirection] = useState<FlightDirection>(
    FlightDirection.OneWay
  );

  const onSubmit: SubmitHandler<{}> = (data) => console.log(data);

  return (
    <Layout>
      <Box
        width={"100&"}
        height={"calc(100dvh - 70px)"}
        overflow={"auto"}
        padding={"16px"}
      >
        <Flex width={"100%"} justifyContent={"center"}>
          <Box>
            <Box
              backgroundColor={"white"}
              maxWidth={"max-content"}
              padding={"4px 8px"}
              borderTopLeftRadius={"4px"}
              borderTopRightRadius={"4px"}
            >
              Uçak Bileti
            </Box>
            <Flex
              as={"form"}
              onSubmit={handleSubmit(onSubmit)}
              width={{
                base: "230px",
                sm: "400px",
                md: "500px",
                lg: "600px",
                xl: "700px",
                xxl: "800px",
              }}
              gap={"8px"}
              backgroundColor={"white"}
              flexDirection={"column"}
              padding={"16px"}
              borderBottomRightRadius={"16px"}
              borderBottomLeftRadius={"16px"}
              borderTopRightRadius={"16px"}
            >
              <Flex width={"100%"}>
                <Button
                  type="button"
                  width={"100%"}
                  marginRight={"16px"}
                  backgroundColor={
                    flightDirection === FlightDirection.OneWay
                      ? "secondary"
                      : "primary"
                  }
                  onClick={() => {
                    setFlightDirection(FlightDirection.OneWay);
                  }}
                >
                  Tek Yön
                </Button>
                <Button
                  type="button"
                  width={"100%"}
                  backgroundColor={
                    flightDirection === FlightDirection.RoundTrip
                      ? "secondary"
                      : "primary"
                  }
                  onClick={() => {
                    setFlightDirection(FlightDirection.RoundTrip);
                  }}
                >
                  Gidiş-Dönüş
                </Button>
              </Flex>
              <Grid
                templateColumns={"max-content 1fr"}
                gap={"8px"}
                alignItems={"center"}
              >
                <GridItem>
                  <FormLabel margin={0} htmlFor="from">
                    From
                  </FormLabel>
                </GridItem>
                <GridItem>
                  <RHFInput name={"from"} register={register} />
                </GridItem>
                <GridItem>
                  <FormLabel margin={0} htmlFor="to">
                    to
                  </FormLabel>
                </GridItem>
                <GridItem>
                  <RHFInput name={"to"} register={register} />
                </GridItem>
                <GridItem>
                  <FormLabel margin={0} htmlFor="from_date">
                    Date
                  </FormLabel>
                </GridItem>
                <GridItem
                  display={"flex"}
                  alignItems={"center"}
                  gap={"16px"}
                  overflow={"hidden"}
                >
                  {/* flightDirection === FlightDirection.OneWay ? "40px" : "0px" */}
                  <RHFInput
                    type="date"
                    name={"from_date"}
                    register={register}
                    width={
                      flightDirection === FlightDirection.OneWay
                        ? "100%"
                        : "50%"
                    }
                    transition={"width 0.3s"}
                  />
                  {flightDirection === FlightDirection.RoundTrip && (
                    <>
                      <Box
                        width={"16px"}
                        height={"2px"}
                        backgroundColor={"black"}
                      />
                      <RHFInput
                        type="date"
                        name={"to_date"}
                        register={register}
                        width={"50%"}
                      />
                    </>
                  )}
                </GridItem>
                <GridItem colSpan={2}>
                  <Button type="submit" width={"100%"}>
                    Submit
                  </Button>
                </GridItem>
              </Grid>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default NewTicketCreate;
