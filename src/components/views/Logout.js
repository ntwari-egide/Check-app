import React,{useState,useEffect} from "react"
import { Redirect, useHistory,Link } from "react-router-dom";
import { Document, Page, Text, View, StyleSheet, PDFViewer,Image } from "@react-pdf/renderer";
import { Table,TableHeader,TableBody,TableCell,DataTableCell } from '@david.kucsai/react-pdf-table';

const LogoutComponent = () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()

    let todayDate = `${yyyy}-${mm}-${dd} ${hour}:${min}:${sec}`;

    const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: '40px',
        fontSize: "13",
        fontWeight: "300"
    },
      imageLogo: {
        width: "10%",
        position: 'relative',
        left: "450px",
        top: '-235px'
      },
      centerImage: {
        alignItems: "center",
        flexGrow: 1
      },
      textHeader: {
        textTransform: 'capitalize',
        paddingBottom: "15"
      },
      billToText: {
        color: '#616164',
        paddingBottom: "5px",
        fontSize: 10
      },
      marginStyle:{
        marginTop: '75px',
        fontSize: 11,
        paddingBottom: "5px"
      }
    ,
    leftAlignment: {
        textAlign: "left",
        position: "relative",
        left: "305px",
        top: "-57px",
        fontSize: 11
    },
    tableHeader: {padding: '10px',fontSize: 10,borderRight: '1 solid #707070',backgroundColor: '#D5D5D5'},
    tableRow: {padding:'10px',fontSize: 10,borderRight: '1 solid #707070'},
    tableTotalRow: {padding:'10px',fontSize: 10,border: 'none'}
  });

        let varia = window.confirm("Do you want to get your session report?")

        if(varia){
    
            sessionStorage.clear()

            return (
                <div>
                    <div class="form-container">
                    <div class="h-screen bg-gray-300">
                        <h1 class="m-auto pt-14 text-center">Logged out, Go <Link to={"/signin"} class="border">Login</Link> </h1>  
                        <h1 className="mt-8 text-lg text-center">Print Receipt</h1> 

                        <PDFViewer className="pef-viewer">
                            <Document title={`atm receipt`} author="Check app ltd">
                                <Page   style={styles.page} className="page" size={[580, 1350]} >
                                    <View>
                                        <Text  style={styles.textHeader}></Text>
                                    </View>
                    
                                    <View style={styles.leftAlignment}>
                                        <Text style={styles.billToText}>Reciept Issued at:  
                                        {todayDate}</Text>
                                    </View>
                                    <View>
                                        <Text style={{
                                            fontSize: '23px'
                                        }}>Check.</Text>
                                    </View>
                                    <View style={{position: 'relative',top: '-90px'}}>
                                    <Table
                                        data={JSON.parse(localStorage.getItem('receipt'))}
                                    >
                                        <TableHeader>
                                            <TableCell style={styles.tableHeader}>
                                                TIME
                                            </TableCell>
                                            <TableCell style={styles.tableHeader}>
                                                AcTION
                                            </TableCell>
                                        </TableHeader>
                                        <TableBody>
                                            <DataTableCell getContent={(r) => 1} style={styles.tableRow}/>
                                            <DataTableCell getContent={(r) => r.date} style={styles.action}/>                                            
                                        </TableBody>
                                    </Table>
                                    <Table
                                        data={[{}]}
                                    >
                                        <TableBody>
                                            <DataTableCell getContent={()=>{}} style={styles.tableTotalRow}/>
                                            <DataTableCell getContent={()=>{}} style={styles.tableRow}/>
                                            <DataTableCell getContent={() => 'Total Number Of Tasks'} style={styles.tableRow}/>
                                            <DataTableCell getContent={() => JSON.parse(localStorage.getItem('receipt')).length} style={styles.tableRow}/>
                                        </TableBody>
                                    </Table>                                    
                                    </View>
                                    <View>
                                        <Text style={styles.billToText}>Chief Executive Officer of Check.</Text>
                                        <Text>Egide Ntwari</Text>
                                    </View>
                                </Page>
                            </Document>
                        </PDFViewer> 
                    </div>
                </div>
                </div>
            )
        }
        else{
            sessionStorage.clear()
    
            return (
                <div>
                    <div class="form-container">
                    <div class="h-screen bg-gray-300">
                        <h1 class="m-auto pt-24 text-center">Logged out, Go <Link to={"/signin"} class="border">Login</Link> </h1>    
                    </div>
                </div>
                </div>
            )
        }

}

export default LogoutComponent