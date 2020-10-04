import get from 'lodash/get';

const toBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    })

const submitFunction = async (values, formApi) => {
    const myFile = get(values, formApi.fileInputs[0]);
    const fileList = myFile.inputFiles;
    const base64Encoded = await toBase64(fileList[0]);
    const formData = new FormData();
    formData.append(formApi.fileInputs[0], fileList[0]);
    return {
        base64Encoded,
        formData
    };
};
export default submitFunction;