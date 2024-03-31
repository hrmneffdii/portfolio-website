import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Resume data
const resumeData = {
  name: "Nama Anda",
  email: "email@contoh.com",
  experience: [
    {
      title: "Pekerjaan 1",
      company: "Perusahaan 1",
      duration: "Januari 2020 - Desember 2022",
      description: "Deskripsi singkat tentang pekerjaan 1.",
    },
    // tambahkan pengalaman kerja lainnya
  ],
  education: [
    {
      degree: "Gelar Sarjana",
      field: "Jurusan Anda",
      university: "Universitas Anda",
      duration: "Juli 2014 - Juni 2018",
    },
    // tambahkan pendidikan lainnya
  ],
};

// PDF Resume component
const PDFResume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Nama: {resumeData.name}</Text>
        <Text>Email: {resumeData.email}</Text>
        <Text>Pengalaman Kerja:</Text>
        {resumeData.experience.map((job, index) => (
          <View key={index}>
            <Text>{job.title}</Text>
            <Text>
              {job.company} - {job.duration}
            </Text>
            <Text>{job.description}</Text>
          </View>
        ))}
        <Text>Pendidikan:</Text>
        {resumeData.education.map((edu, index) => (
          <View key={index}>
            <Text>{edu.degree}</Text>
            <Text>
              {edu.field} - {edu.university} ({edu.duration})
            </Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default PDFResume;
