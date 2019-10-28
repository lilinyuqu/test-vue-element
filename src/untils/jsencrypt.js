import JSEncrypt from "jsencrypt"; //RSA加密

let $getRsaCode=function(str){
	let pubKey="MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALBb7es3EQpt+6Ysp2MVJ84/X4+3OtVFM/QHCIjo4oZYBqgZazKfVbUthkTwniRR35G2KOKKbUtRZnPb8FMSVJkCAwEAAQ==";
	let  encryptStr=new JSEncrypt();
	encryptStr.setPublicKey('-----BEGIN PUBLIC KEY-----' + pubKey + '-----END PUBLIC KEY-----');
	let  data = encryptStr.encrypt(str.toString());  // 进行加密
	return data;
}
export default $getRsaCode