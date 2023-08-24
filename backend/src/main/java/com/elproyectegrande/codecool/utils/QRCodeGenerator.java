package com.elproyectegrande.codecool.utils;

import com.elproyectegrande.codecool.model.User;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;


public class QRCodeGenerator {
    public static void generateQRCode(User user) throws WriterException, IOException {
        String qrCodePath = "/Users/rubyzli/Desktop/codecool/advanced/el-proyecte-grande-sprint-1-java-JovanMilojkovic/frontend/src/components/pictures/";
        String qrCodeName = qrCodePath+user.getFirstName()+user.getId()+"-QRCODE.png";

        var qrCodeWriter = new QRCodeWriter();
        BitMatrix bitMatrix = qrCodeWriter.encode(
                "Firstname: "+user.getFirstName()+"\n"+
                        "Lastname: "+user.getLastName(),
                BarcodeFormat.QR_CODE, 400,400
        );

        try {
            Path path = FileSystems.getDefault().getPath(qrCodeName);
            MatrixToImageWriter.writeToPath(bitMatrix, "PNG", path);
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}

