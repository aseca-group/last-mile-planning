import React, { useEffect, useState } from "react";
import Delivery from "../../components/delivery";
import { getDeliveries } from "../../request";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function fetchDeliveries() {
      const response = await getDeliveries();
      setDeliveries(response);
    }

    fetchDeliveries();
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(async () => {
  //     const response = await getDeliveries();
  //     setDeliveries(response);
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography fontSize={"40px"} fontWeight={"bold"}>
        Deliveries:
      </Typography>
      <Box
        border={"1px solid"}
        borderRadius={"8px"}
        height={"100%"}
        width={"200vh"}
      >
        {deliveries.map((delivery) => (
          <Delivery
            key={delivery.id}
            deliveryId={delivery.id}
            addressId={delivery.addressId}
            driverId={delivery.driverId}
            date={delivery.date}
            status={delivery.status}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
