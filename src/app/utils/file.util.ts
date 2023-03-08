import { environment } from "../../environments/environment";

export default class FileUtil {

    public static checkImageFile(image: File) {

        const imageFormats = '.jpg,.png,.jpeg,.bmp';
        const fileExtRegExp: RegExp = /(?:\.([^.]+))?$/;
        const currentFileExt = fileExtRegExp.exec(image.name)[1].toLowerCase();
        const isFormatValid = imageFormats.includes(currentFileExt);
        return isFormatValid;
    }

    public static checkDocumentFile(image: File) {

        const documentFormats = '.pdf';
        const fileExtRegExp: RegExp = /(?:\.([^.]+))?$/;
        const currentFileExt = fileExtRegExp.exec(image.name)[1].toLowerCase();
        const isFormatValid = documentFormats.includes(currentFileExt);
        return isFormatValid;
    }

    public static checkFileSize(file:File){
        const isSizeValid = file.size <= environment.maxDocumentSize;
        return isSizeValid;
    }
}