Vue.createApp({
    data() {
        return {
            name: '', //お名前
            mail: '', //メールアドレス
            subject: '', //件名
            contents: '', //内容
            errors: { //各項目のエラーメッセージ
                name: [],
                mail: [],
                subject: [],
                contents: []
            }
        }
    },
    methods: {
        validator(type, max = 1000) {
            // エラーメッセージを初期化
            let name_error_message = [];
            let mail_error_message = [];
            let subject_error_message = [];
            let contents_error_message = [];
            // タイプを日本語に変換
            let type_ja = {
                name: '名前',
                mail: 'メールアドレス',
                subject: '件名',
                contents: '内容'
            };
            console.log(type_ja[type]);
            console.log(max);
            // メッセージを配列に格納
            let message = [
                max + '文字以内で入力してください。',//message[0]
                type_ja[type] + 'が未入力です。',//message[1]

            ];
            // 入力された値を取得
            // 名前
            if (type === 'name') {
                if (this.name.length > max) {// 入力された文字数がmaxを超えている場合
                    name_error_message.push(message[0]); //エラーメッセージを配列に格納
                }else if(this.name === ''){// 入力されていない場合
                    name_error_message.push(message[1]); //エラーメッセージを配列に格納
                }
                this.errors.name = name_error_message //エラーメッセージをerrors.nameに格納
            }
            if (type === 'mail') {
                if(this.mail === ''){// 入力されていない場合
                    mail_error_message.push(message[1]); //エラーメッセージを配列に格納
                }else if (this.mail.indexOf('@') == -1 ) {// @が含まれていない場合(メールアドレスの形式でない場合)
                    mail_error_message.push("メールアドレスの形式ではありません");//エラーメッセージを配列に格納
                }
                this.errors.mail = mail_error_message //エラーメッセージをerrors.mailに格納
            }
            // 件名
            else if (type === 'subject') {
                if(this.subject === ''){// 入力されていない場合
                    subject_error_message.push(message[1]); //エラーメッセージを配列に格納
                }else if (this.subject.length > max) {// 入力された文字数がmaxを超えている場合
                    subject_error_message.push(message[0]); //エラーメッセージを配列に格納
                }
                this.errors.subject = subject_error_message //エラーメッセージをerrors.subjectに格納
            }
            // メッセージ
            else if (type === 'contents') {
                if(this.contents === ''){// 入力されていない場合
                    contents_error_message.push(message[1]); //エラーメッセージを配列に格納
                }if (this.contents.length > max) {// 入力された文字数がmaxを超えている場合
                    contents_error_message.push(message[0]); //エラーメッセージを配列に格納
                }
                this.errors.contents = contents_error_message //エラーメッセージをerrors.contentsに格納
            }
        },
    },
}).mount('#app');