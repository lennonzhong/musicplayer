const state = {
    singer: {},
    singerinfo: {},
    singerSongs: [],
    playCurrentObj: {
        "song_name": "\u661f\u613f\u4f20\u5531 - \u62a2\u542c\u7248",   //歌名
        "author_name": "\u827e\u798f\u6770\u5c3c",                      //歌手名字
        "img": "http:\/\/singerimg.kugou.com\/uploadpic\/softhead\/400\/20170711\/20170711203349386325.jpg", //图片
        "lyrics": "[00:00.00]\u827e\u798f\u6770\u5c3c - \u661f\u613f\u4f20\u5531(\u62a2\u542c\u7248)\r\n[00:01.01]\u4f5c\u8bcd\uff1a\u827e\u798f\u6770\u5c3c\r\n[00:01.26]\u4f5c\u66f2\uff1a\u827e\u798f\u6770\u5c3c\r\n[00:01.46]\u7f16\u66f2\uff1aDMOB\u5de5\u4f5c\u5ba4\r\n[00:01.67]\u540e\u671f\uff1aDMOB\u5de5\u4f5c\u5ba4\r\n[00:01.87]\u6df7\u97f3\uff1aDMOB\u5de5\u4f5c\u5ba4\r\n[00:02.12]\u6bcd\u5e26\uff1aDMOB\u5de5\u4f5c\u5ba4\r\n[00:01.65]yo \u5927\u5bb6\u597d\u6211\u662f\u827e\u798f\u6770\u5c3c\r\n[00:03.79]\u6211\u7684\u5723\u8bde\u661f\u613f\u662f\r\n[00:05.66]\u505a\u51fa\u66f4\u591a\u597d\u542c\u7684\u6b4c\u7ed9\u4f60\u4eec\u542c\r\n[00:07.71]\u5bf9\u4e86\u4f60\u4eec\u7684\u5723\u8bde\u661f\u613f\u662f\u4ec0\u4e48\u5462\r\n[00:16.45]\u5723\u8bde\u5728\u5012\u6570\r\n[00:17.92]\u9001\u9910\u90fd\u8df3\u821e\r\n[00:19.52]\u4f60\u9700\u8981\u7f8e\u5473\u6e29\u6696\u904d\u5e03\u6bcf\u4e2a\u89d2\u5ea6\r\n[00:22.31]\u70b9\u4e86\u5fc5\u80dc\u5ba2\u548c\u4f60\u5206\u4eab\u4e00\u4e9b\u795d\u798f\r\n[00:25.14]\u5b85\u6025\u9001\u6696\u624b\u5fc3\u4e0d\u5fc5\u62c5\u5fc3\u9001\u9910\u901f\u5ea6\r\n[00:27.89]\u5fc3\u613f \u6b4c\u58f0\r\n[00:30.73]\u5531\u7ed9 \u4f60\u542c\r\n[00:33.66]\u5723\u8bde\u795d\u798f\r\n[00:36.19]\u8ba9\u6211\u4eb2\u53e3\u4f20\u5165\u4f60\u7684\u5fc3\r\n[00:39.63]\u6765\u81ea\u963f\u798f\u5bf9\u7433\u8fbe\u8868\u767d\u53ef\u80fd\u4e0d\u591f\u5e05\r\n[00:42.53]\u4e5f\u4e0d\u591f\u9ad8\u4e5f\u4e0d\u591fswag\u4f46\u51b3\u5b9a\u8bf4\u51fa\u7231\r\n[00:45.42]\u6709\u4e2a\u7238\u7238\u5bf9\u513f\u5b50\u8bf4\u867d\u7136\u5b58\u6b3e\u4e0d\u591a\r\n[00:48.25]\u4f46\u4e00\u5b9a\u52aa\u529b\u5de5\u4f5c\u7ed9\u4f60\u66f4\u597d\u7684\u751f\u6d3b\r\n[00:51.24]Where you are\r\n[00:53.87]May so far\r\n[00:56.91]Where you are\r\n[00:59.45]I just wish you a merry Christmas\r\n",
        //上面是歌词
        "play_url": "http:\/\/fs.w.kugou.com\/201711301412\/8c891246a34cd3af16052921d0747ae9\/G117\/M0B\/17\/07\/tQ0DAFodJrSAFh0FABGmBbr_PhM442.mp3",
        //播放地址
    },
    playstate: false
}
export default state