import React, { useState, useRef } from "react";

import moment from "moment";
import "moment/min/locales";
moment.locale("tr");

import Toast from "react-native-simple-toast";

import {
  Box,
  Text,
  Button,
  HeadDate,
  Input,
  TimeSelector,
} from "../components";
import theme from "../utils/theme";

export default function NewAddView() {
  const { colors } = theme;
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [startTime, setStartTime] = useState([]);
  const [endTime, setEndTime] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );

  const saveDatas = async (data) => {
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    // await fetch("http://localhost:3333/plans", {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: data,
    //   redirect: "follow",
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => console.error(err));
  };

  const saveData = () => {
    if (title.trim().length > 0) {
      if (message.trim().length > 0) {
        let saveData = {
          userId: 1,
          plan_date: moment(selectedDate).format("YYYY-MM-DD"),
          text: title,
          message: message,
          plan_time1: startTime.join(":"),
          plan_time2: endTime.join(":"),
        };
        console.log(saveData);
        saveDatas(saveData);
      } else {
        Toast.show("Lütfen Mesaj Giriniz");
      }
    } else {
      Toast.show("Lütfen Başlık Giriniz");
    }
  };

  return (
    <Box flex={1} px={3} py={4}>
      <Text fontSize={24} fontWeight="bold">
        Yeni Ekle
      </Text>
      <HeadDate selected={selectedDate} setSelectedDate={setSelectedDate} />

      <Input
        placeholder="Başlık:"
        label="Başlık"
        value={title}
        onChangeText={(e) => setTitle(e)}
      />
      <Box mt={3}>
        <Input
          placeholder="Mesaj"
          label="Mesaj:"
          value={message}
          height={100}
          multiline={true}
          onChangeText={(e) => setMessage(e)}
        />
      </Box>

      <Box
        mt={3}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box width="50%">
          <Text color={colors.lightBlack}>Başlangıç Saati:</Text>
          <TimeSelector selectedTime={setStartTime} />
        </Box>

        <Box width="50%" pl={2}>
          <Text color={colors.lightBlack}>Bitiş Saati:</Text>
          <TimeSelector selectedTime={setEndTime} />
        </Box>
      </Box>

      <Button bg={colors.black} p={3} mt={4} onPress={() => saveData()}>
        <Text color={colors.white}>Kaydet</Text>
      </Button>
    </Box>
  );
}
