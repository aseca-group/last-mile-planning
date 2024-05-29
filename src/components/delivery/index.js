import React, { useEffect, useState } from "react";
import { changeDeliveryStatus, getAddress, getDriver } from "../../request";
import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const Delivery = ({ deliveryId, addressId, driverId, date, status }) => {
  const [deliveryStatus, setStatus] = useState(status);
  const [address, setAddress] = useState({});
  const [driver, setDriver] = useState({});

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const getData = async () => {
    const address = await getAddress(addressId);
    setAddress(address);
    const driver = await getDriver(driverId);
    setDriver(driver);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpdateStatus = async () => {
    const data = {
      id: deliveryId,
      date: date,
      status: deliveryStatus,
      addressId: addressId,
      driverId: driverId,
    }
    await changeDeliveryStatus(deliveryId, data);
  }

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"2vh"}
      >
        <Typography fontSize={"20px"}>Driver: {driver.name}</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography fontSize={"20px"}>
          Address: {address.city}, {address.road}, {address.number}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography fontSize={"20px"}>Date: {date}</Typography>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Select
            value={deliveryStatus}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            onChange={handleStatusChange}
          >
            <MenuItem value={"PENDING"}>PENDING</MenuItem>
            <MenuItem value={"IN_PROGRESS"}>IN_PROGRESS</MenuItem>
            <MenuItem value={"COMPLETED"}>COMPLETED</MenuItem>
          </Select>
          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: "2vh" }}
            onClick={handleUpdateStatus}
          >
            Update Status
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Delivery;
