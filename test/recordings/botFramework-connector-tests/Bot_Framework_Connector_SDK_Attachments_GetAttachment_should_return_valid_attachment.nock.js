// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['CLIENT_ID'] = 'be5a8c67-75dd-424a-b7da-746141e11f7f';
  process.env['CLIENT_SECRET'] = 'poR3ZiMgA3JSUkFOcSjtUGp';
  process.env['USER_ID'] = 'U3Z9ZUDK5:T03CWQ0QB';
  process.env['BOT_ID'] = 'B21S8SG7J:T03CWQ0QB';
  process.env['HOST_URL'] = 'https://slack.botframework.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'db1ab6f0-4769-4b27-930e-01e2ef9c123c';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://slack.botframework.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/v3/conversations', '*')
  .reply(200, "{\r\n  \"id\": \"B21S8SG7J:T03CWQ0QB:D8K7XGZU3\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '45',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/10.0',
  'request-context': 'appId=cid-v1:6814484e-c0d5-40ea-9dba-74ff29ca4f62',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000',
  date: 'Thu, 04 Jan 2018 20:57:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/v3/conversations', '*')
  .reply(200, "{\r\n  \"id\": \"B21S8SG7J:T03CWQ0QB:D8K7XGZU3\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '45',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/10.0',
  'request-context': 'appId=cid-v1:6814484e-c0d5-40ea-9dba-74ff29ca4f62',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000',
  date: 'Thu, 04 Jan 2018 20:57:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://slack.botframework.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/v3/conversations/B21S8SG7J%3AT03CWQ0QB%3AD8K7XGZU3/attachments', '*')
  .reply(200, "{\r\n  \"id\": \"at14013-6gmZyfEzyRJ\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '35',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/10.0',
  'request-context': 'appId=cid-v1:6814484e-c0d5-40ea-9dba-74ff29ca4f62',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000',
  date: 'Thu, 04 Jan 2018 20:57:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/v3/conversations/B21S8SG7J%3AT03CWQ0QB%3AD8K7XGZU3/attachments', '*')
  .reply(200, "{\r\n  \"id\": \"at14013-6gmZyfEzyRJ\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '35',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/10.0',
  'request-context': 'appId=cid-v1:6814484e-c0d5-40ea-9dba-74ff29ca4f62',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000',
  date: 'Thu, 04 Jan 2018 20:57:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://slack.botframework.com:443')
  .get('/v3/attachments/at14013-6gmZyfEzyRJ')
  .reply(200, "{\r\n  \"name\": \"bot-framework.png\",\r\n  \"type\": \"image/png\",\r\n  \"views\": [\r\n    {\r\n      \"viewId\": \"original\",\r\n      \"size\": 8369\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '142',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/10.0',
  'request-context': 'appId=cid-v1:6814484e-c0d5-40ea-9dba-74ff29ca4f62',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000',
  date: 'Thu, 04 Jan 2018 20:57:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443')
  .get('/v3/attachments/at14013-6gmZyfEzyRJ')
  .reply(200, "{\r\n  \"name\": \"bot-framework.png\",\r\n  \"type\": \"image/png\",\r\n  \"views\": [\r\n    {\r\n      \"viewId\": \"original\",\r\n      \"size\": 8369\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '142',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/10.0',
  'request-context': 'appId=cid-v1:6814484e-c0d5-40ea-9dba-74ff29ca4f62',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000',
  date: 'Thu, 04 Jan 2018 20:57:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://slack.botframework.com:443')
  .get('/v3/attachments/at14013-6gmZyfEzyRJ/views/original')
  .reply(200, "�PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0001,\u0000\u0000\u0001,\b\u0006\u0000\u0000\u0000y}�u\u0000\u0000\u0000\u0004gAMA\u0000\u0000��\u000b�a\u0005\u0000\u0000 hIDATx\u0001�\txV噆?\b$,a\r�\u0004Dd\u0013�jպ�(VA[��L/;��Wg���m\u001d7p\u0003w\u0004�٧�֙�U�.���\u0019\u0017\\\u0000Aq+&!\t[�\u0002\u0004��9�T\tȿ����{��j#Y��~��|�����腫�:\u0016\t�\u0000\t\u0018 ��@�l�\u0004H�\u0004\u0002\u0002\f,\u001a�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��n�����i�\u00007����_N�o`���\u0003x��E���\u0012=19o?�܍\u001fQ��M��6�\u0010V\u0018�9�\u0001<\u0018Z)1��a0�R�'&�\u001c��'\u000f�\u0016��W�\"/C+\f+�\u001f\u0005\u001e���\np���\u0018X�e�,\nΞX�N�\u0017V�p|\u000b��a\u0015r\u0000\u0017�\u0001'�}\u0002�Ѱ��aU�N=�ye�r(��Vka\u0015�\u0000��\u0013+\u0018Z!\u0010�_\u0019XF��$��&��!��*\u001cV�C���\n9�\u0013x�\u001b�.\u0001�gP� ��+w��\b�phi\r�l�*�\u0000^�\t7�VH��W\u0006�1�0�n�Iw�a�s�<m��kX���\r�\u0018Z!\u0011[_\u0019X��*\u0012�n9�ܝ�cX�CLKh�\u001bV!\u0007�\u0003G�d�\"@Ɍ�\u0015�ՙCs[Y�\u001c���*4�B\u001e���\ni����2�\u0015���\t��\u0002�*\u001c��Њ*�B\u000e�\t�\\i�D�����p�puɬs\u0006�1�\n[Y�\u001c��Њ:�B\u001e�\n���'$��\f�\u0004�\u0013��\\\u00137vx�J�ah\r��Ye�Qm\u0014��r\u001b�Q�k\u000f\u0019Z\u001at��&\u0003+Z��m\r�g�bX��~�~�[��)�g\"��?�Y\b-�fhiR.|�\f��\u0019F���\u0012V7�n�8��U��Ҫ�nƣ5��io��D~E�\u0013�j\u0016x�;���I���0]0Yn\u001c? �ۀfkoW7��\f�U�\u0000��~ѷf�.\u000f���Ҥ���\u0019X����/1I�\u001f'a5R�U��;5��b�v�\u0013��\n�\r��_��5\u000b��\u0003CK�r~�f`��-��^�u���s\u000f�\u000f�+\u001f�v�v%{7�5��\u001b�k�\u0016t�\u001e�;lM���>\u0003�}����aX�wx���\u001f�?ޕ���\ny����h\u0016�`hi\u0012�}�\f�ܙE�\u0017\b�k�|�(ݰZ���]axe�\u0012:B\u000b���4\u000b�@\u001f��4)g�m\u0006V��\"�ML�k��w�+��� �j��\u0006�\u0006�9�j\u001cƧY�\u0007:1�4)g�m\u0006Vv�T~\u000b��#tWV+j\u001b��Gj�֝{T���\u001bŸ0�\u0015�;T[�NЋվ\u0004\u0018X���gg�S\u000f���v���\u001bV�tAh-�v\u0018�f!��\u001b��\b0�ځ�O��s�����+���v[R��j\t\u000f�.��qk\u0016t�~��!�����O�쓏�\r�U2i���ݼ#����I��b�\u0018�fA?�Ȋ�\u0000\u0003+F�W���]�\u001dV�;�T\u000f�*�\u0011���\u0012\u000e�\u0005\u001d�'+^\u0002\f��x�8����hݕ��2I�=��ʪ���JK8��fAO�ʊ�\u0000\u0003+\u0006�W�Q�~�nX}�NVV2I\u001b<�\rlM>p\u0000\u000fp�,�\n}Y�\u0010``)s�B�|ɱ�T_e���\f�\f���\u0002\u001f͂�Й�O����x��e�\u001b�a�a\u0010VUnS�_\u0007س�\r\\�>\\��I��3�f�\u0012``)�&���tWV\u001f�M�.�ɸ�auP\u0015���E\u0012Z�7\u0001��SG3�\u000e*F�?d`\u0015\b0ӟ_>����rX�\u000e�\f�L�3o�v\t-\tw�;�~��^\u000e��t\b0�\"�:崾�;���x��o��\r\b�j�I�ʞ@shU;��,�\u000f\u001f��'�����Ť�=^7�>AX=T�6l�\u001da��l\n��\u000f\u001c5\u000b>�\u001fX�\u0012``E��/N���(���\"�m=ê ��\u000f+T�Ђ\u001f�\u000bVt\u0004\u0018X\u0011���)}ݟ|Ywe�����@�U\u0004��&�mk\u000e-p�,�\u0002�`EC��U ��N��w�nX�~�`7\u0006��\u0015\u001d� �d�\n��\u0005�'��\t0�\n`�C1�'�\u001aqͦ]n�|�Uϰ*@���\u0014\\�\u0017�5\u000b>�_X�\u0011``���Ͽ��}?��zH�j+WVyʔ՟��\u0014�\u001dZ�\u000b|�ʟ\u0000\u0003+\u000fv?8���S��f}ր��*Wǰ����m�3x��f�7�\u000f+?\u0002\f�\u001c�����ϔ�%�d�L�M��eX�Na�\u000e��\u000e��\u0005��G��\t0�r`��\u0013\u0011V���T#��@0�*\u0007a\"�� ��?t�,�\b~b�F���%�K哞\u001f��\u001bV5�w�\u001f�dY��)ˮ�k\u001a\u0004�\u001f:@\u000f͂��+V�\u0004\u0018XY����Ks��4\f�,���W�\n-�\n�beG���\u0006���?峕k67\u0005����J\u000e��t���K����P-�\u0013\u0006�A�����/��;9�\"PͰ:�\u0012��#�\u0002}�w�q\t\u000f��:8\u0001\u0006V+|�+�\t���t�mT����ҫ\u001a��jE�D|\u001b�@'�Y�\u001b|�j�\u0000\u0003+\u0003��i�(߈�N̏�\u0015?cXeP y߂N�\u000b�i\u0016|\u0007��2\u0013``���m�����a�\u0015�B1�Z�O�?�В��:�O��?��u \u0001\u0006�\u0017�|�؞n��}�av���\u0000���ٴo��\u001cZ�!��ڟ\u0000\u0003k\u001f�o�9������z19n\u001e\u0007ӳ�\u0012�~�\u0011zj\u0016�\b_�>'��\u0012\u0016�ȳ�P\u000e�u���rӸ�+�\u0015�si�_�\u0004�#􄮚\u0005_�f\u0002�\u0007V� L���\u0017S�r�O��DS�K\u0000z\u0006w�U\u000e�+ş_S~jx���5�\u0003\u000b&�~j/�*sZ�˸Bkƙe\f-1���u�Q=\u001cLСC\u0007�y�a�mx?��J�q\u00126\f}�{\b��\n>�_�[�����,�_}V?ݰ\n\u001etP%��ҽ��g�&i��\u0019g�k>�\b�\u0005�¿��w�5��\u001e�'�a�q_X}İ�j^Ao�\u0016��*�\u0016�\u000b\u001f�X^\u0005օG�p?\u001d���j\u000e�jy�0WV>N(��C�Ђ��g�ʛ���R���u�jS�n7U���<F��/\u0001�?mQ��\u001f�\n+-�\u0019����\b,�z����Ǭ\u001aĜ�$�V3�|�?����u\u0012Z�\u0007�B�\u0010Z�O�����xxsXu\u0014q�\n��*��IY$\u0010\u0012�\u001f�\u000b�Ђ�\u0011Z�\u000f���:OD�v\\�\u001aV;de���gX�0ar\u001d#|\u00014�O�\n������Wj\u0003�ܑ��:��,&�.f\\ŰJ�<)h|�\u0007|\u0002�h\u0015B\u000b~���\\�\f�\t1���:���<A�\u001a\u001b|\u0012Wh��i���\u0017L�����\u001f���0~�+�w�jˎ=b�\u001a����*\u0012,�{wv�ˊ��u/����u�M{\u0013k��];��}��\u0011�K\\��E��\f\u0002\u001a$���(��L���4���K]q'\u001db�u�a�ܧrqv\u001aO��0z�jk�gv�|w�����sb\b�G�݊�\u001d����\u001f\u001cS^\u0012\\�6Z�ܳ��\u0016W��pO���~��&�mW�[�[�\u000e����r�D�Q\u0012T-\u000bǄ^�x����\u0006��Z[Z\u001c9��ͽ�ҕ�����7�YOպ%�i�*5�5V�=Sª���j�N����rCaէk��JΌ>{X��|�KK\u001exu�{��Y���/] 'D�\f�=�z�í���U/�ɦ�\\~�(�֤J�\u0015�Va�<SB�\u0014�V*v\t1\u0019gM�\u000f�+ee��PX��ݾ�\u0017\rtǔw�zNt��ѝ9���ۭ����m��vawu���e�Q�m\u001d֧؍\u001fQ���l�[�xYL��d�{u[w�7���\nRv\u000f1p����Y�%�sL�5��\u0003k��n�s��WV\b+K�\u001e�zvr\u000f|m�+��)����\u0016�p^�d[^��\u001fa%��}�Je���G��6��-\u000bU\u001bSh��7���4�5$���\u0004:��!\u0012V\u0013t�jۮ=nƣ��\n���ϯp=�d�K՚�\u0017���&�t�-^\u0007�WHa�\u0018w\u000e��B^.��ś �\u0005�i\u0015\u000e�`�`�X/��5�Og7\u0013��J�i\b\u001b��#5�\u001a[\u0007u/9�W�Z\u0014��S�5���Gl\u001f�\u0013E��D��R�_3�g��%�\u0004�\u0005��r�\r,\\��M�t���]�h�{��є�8\u001er�\t�#빗�Z����-y�\u0002^'�����\u000bE�c���g�\u001b|�U�/�7��d`�zhWwt\u000e\u0007�s\u0015\b��!�y��VXa�'\u000e�Z�`K^8oH�p�9�®!8X+�M;�0o0����\u001a��G����(au�om�\u0015�;zH�f\u001c&�6���w�-\r�]l?���\u0010u����TB\u000b��\u000f�Js�h�\u001cn�d`\u001dW\u0019��\u0004�0�ެ���\n\u0005\u001d�S�\u0018�@��Q�����A�A�m����5Z�C��&\u0003\u000b�gD];�de�X�{�pX�I�\u0002�`�r^�F�)m\u0017�Y.�\u0010~�/�.��\u0013u��m�d`i\\8���J�L��O�\u001dJ�\u0004Z����\u001a.�\u000f��?�G�2�L��\f��\u0012��vqA�m\u0013��i�\u000fH���r2�F��]�Rۮ\u0012\u0007\r\u0006��\t\u001f�\u0016?Q������ֶg2�p`R��Q�m\u0013+L���>�sưZ�X���خ�jh�\u0002\u0007\r�e�&>Ń\u000f5�\n��52�%��\f,�U@�\u0010Z��,'\u000f�9���w���?��R���lwەv5�]l?�zA�C�=f��)�;�O�<�%\u001fl���&�g2�^\u0013�/�\u000bG�\nf�#��\u000f�\u0017Zxb��Ѯ@\u001f^Ѡ�:�n��_&���\"�\r���a�y��g��C�\u001c-6n2�0���֩�r��SG7��r�\u0015��u�+�[Ȝ�?ߑ3�5Vm_�\b���DU\u000b#\u001cT=��\u001d�\f~��\n�hƼ�\\zt������{�V��G�:�s���$c��c\u0014�|gS8�����_sb28^\u0007�Wha�֎��_�fX�8!�\u000b��2\u001bX��]�k\u001e�Q\u000f�;�L'\f���RI0ļ��\u0005��ʷ�]b�\u001b\u0017��v\u001f%ܯ\t���ͷp�.��R�W�vXa�`�X/����;�*���X�\u001eM�>�=�8�\u001c�]�m��l�\u001d\n����[�\u001b��^�\u0014�:�k�^�\u001b��Yk�>�o����6ι��\u000f=>����ZR�\nȻ8�\u001a��\t\u0003��;�Z�(^ď7����z��x�Ԃi>�\u0000&\b-y�\u0012��R\u000b-9\u0010�\u001b��XK��В�zIn��������ں�0n������z�uh�����s�\u001e[�%\b�����<q\u00127���L�{�Mno��3����v�,auW\u001ca��Z�JJ�\n0SsOw\f\u00067(��<���}��;9�V���$�-sq?�~�;I(tp��Ъ�&y\u0007�&\u0007׷:ܺ7)�_.3B��\u001e���C\\n�]\u001e�Q��)��>�]*��HΚ��*���/��y\u0015�� ���V�\noXi�T\u0005\u0016�9Cv'n�-�eE�UVCK�\u0007��=�8ª\ta��Z��<U(me��{&1 �u\"\u0016D�*\u001c_�K�!�Ta�@�\u0016\u000fn7;\u0002�\u000b|������[�=��ư�\bS\u0017X\u0018�\u000b\u0012Z�/�\r-ܽ��\u000b+ܱ\u0015�\u001d�F,�\b�'��]r\u0011V�=���Je`A,��x�<�\r\u0007��*\b�\u000b*�1Z\f--�i�.�q��D5�����I��Gj\u0003\u000b`��'�ۣ\u0019Zx��=�\u0014ߣ\u0019Z���D�>|\u0001h>�\u0003������W�\u0003\u000b�AD<�V;��\u0015S��7\u0016\t�\u0004�\u0007�B;��o\u001f�\n\\S\u001fX\u0018$\u001e�}���[q�\u0010��9�\u0000R\u0016\t�\u0007�a\u0005?��iz\u0014}[��\"�\u0000a��Vp&�bh��tts%�r=��-��s[\u0004�?|\u0000?h\u0015�\n~��}*=�\t��䃭���TWZAhM��Њ�I0\tDʖZ\u0010��sE���g�ʫ�������n\u0011��(^�ѣ�HL[�F1���O�\u001b�C��o�_����.� �1���r=\u001c+�\u0004�s\\a\u0005��Z^\u0006\u0016�~b�\u0016w��J�����'︸���^\u0002�\u0017:Co���\n~�o}.o\u0003\u000b�?.��J��C<6}��\u0019wK`��\u0000t���Y��O�\u0014~���\u000e,��[��\t̰W�V\u0010Z�+��\f�4M8�9Ot�\f+�\u0012��OY���Ֆ�0Üg�UC�\u0017VZb�a\f���0�s�\b=��V!��K��焽_a�(\u001eyo���9���ݵ��\u0017�\u000f��9|Y~5H\u0000�!���V!��G���9\u0001\u0006��,ܢ\u0015��\u001d��\u0011Z\u0003��>\f�/�7��m��m޽��\u0001!��C���?\u0001\u0006��<��r��;�C\u000b�*��\u000fch����B�8�\n��\u000fY\u0007\u0012``\u001d�$����/�>}����\u0017��Czs��A��}\u000b:A/�UXY�w��>+3\u0001\u0006Vf.���\u001a�<���4�o����-���\u001d�Њ\u0006��V�\u000ft�^�uϋ�\u0002�i���m3�\u000e���mp�0�\u000eB(�?�-��g�\u001b��\u0004\u0018X\u0007���GLt+�2y�����^�=lC�X\f=�\u000b��,�\u000b>c�M���6#y�{���%���c���n�!�t'G\u0016��\b\u0001�\u0000=��f�W�\u0017+;\u0002\f��8��z�A�1��er,�O\u000f\u0007�3�X�G\u0000��\u0003�Ьy/�\u000b|��\u001ai�6\u0003+\u0007E���Mn�˺�\u001e�/�����,��*�\n���f�G�\u0013+7\u0002\f��x\u0005�D_\u0010Ch-`h�L�\u001e��b\b+����\u0018V�(��ʃ�/�l\u000b_�]i\r�w��2y�v�>\u0001p\u0006op�,�\u0006�a�G���\u001f7��K7�\u0007^]��_g�g�\b-9�R�Cw\u0012e�Mz\u000b|�\u0019�5\u000b~�oX�\u0013``����ۛ\u001b���N7�*d2�E|eEO .��\t��*�\u0000\u0003�0~�_����V=��Lk9\u001fH{\u0005P \ns\u000e��Z�C��7�\u0003>a\u0015N��U8C��bƿ�_ݕVe����\u0015C+\u0002��M ��\u0013\\5\u000b��?X�\u0010``E�������\u001f�O?��{8���\u0005�\u0011�H�f�\u000f\u001c��\n~�/X�\u0011``E����k\b�\r\u0011n��M\r�\u0015���qR#C�@:m\u0007��\u000f\u001c5\u000b>�\u001fX�\u0012``E�SL�����O�\u0006!�p�\u0010C+'�AX\t7��,�\u000f\u001f��'������{yw��뺆=D.�Eh�che� 8�\u0017�i\u0016t��,\u001d\u0002\f,\u001d�r\u0010~�|2�k� ����~�7�S�\u0013�f�\u0007�\u0006j�\u0015��,=\u0002\f,=�r��\u0006��ʟ\u0010\rƝ0�\u0000r\u0019C+���\u0002>�Y�\u0019z�t\t0�t������C{\u0017\u0007�m��\u0014\u0017eL*�\u0007\u000f��\n|4\u000b'�Bg�>\u0001\u0006�>��\u0012��X���ѐ>��G�\f�fA�\u0001�.��fAW�K�4���m\u0006VL����z��\u0018B\u000b�?x*��\u0015<�(����Е\u0015\u001f\u0001\u0006V|��\u00021��o鮴\u000e�\u0015\u0005v�zw�SZ�\u001b�\u0007\u0007͂�Г\u0015/\u0001?]\u001d/��^m����.��W�\u000f�Ǩ��\u0003���%/Ƌqc��\u0005��#+~\u0002~9:~�\u0019_�>�5�+��0�B+\f+�[��\u001b�c�\u000f\u0001\u0006V�pws��|Gw�5���͓\u0015G����0>�\u0013��,�\u0005�X�G���~���a��Yt��5<\b�J׳$�Rc\\��\u0015ƩY�\tz�ڗ@:]ܾLszu<�\\�\u0001�#�J�I���\n�\n��,�\u0003�X�O����\u001a�d�w�Y��l���J�}�\u0012鑒�\u0016Ɓ�`\\�\u0005]�\u000f+\u0019\u0004\u0018X�����|�{h�nh\u001d.�{�$�����80\u001e͂\u001eЅ�\u001c\u0002\f��h��x��=�\u001dZ�e�e8���\u0015�JơY�\u0001z��E���,=��2I\u0016��]i���~��ؖ��\u0017}��\u0002��J\u001e\u0001[�M\u001e?���<[�\u001e}o�ʶÍ\u001e9��͝T�\u001b\t-�~ѷf�;���I���L]��g�b\b�.n�\u0015���CB)4�����\u0003�����\u0002wVr\t0�\u0012��^�\u000b�籕�+��Սn�n�Zr\u000b��Yը� 8�w�I�\"0�q\u0006V�e����:��Rh��(V�6�\u0010OMVz\u0010)��3�*��a_k\f��k�It�L�'VE�Ҳ\u0014V�D\u001a�\u0005��˰\n)'�+\u0003+��\u0004݅���-�tk1�G\u0019Z�ɰ\n���������#�u�ӵ��\u000b\u000b-�a\u0015J\u0015Eh�#x�+�\u000e\u0001\u0006�\u001d���5k���\u0007��V\u001a�*����\u0002?pdX�4�|e`��*�\u0014�즧j�ӫs\u000b�4�U(Y>�\u0005n�ǰ\n)������W�-�B����=�eh�1�B�r\t-�\u0002����\u0011\u000e�_3\u0010``e�b�[�t7��{�í\u0007m7�a\u0015\u000e<��\u0002'�bX��l~e`��-�\u001a���k�s���\u000fa\u0015�w��\u0002\u001fpbX���~e`��.�|�\u001e算���G���p����B�� Sh�\u000b��\u0013�>\u0001\u0006�}\r��xݓk�\u000b�B\u000ba���c}1��\u0003\\\u0018V�qB��\u000bWˎ\u0005+\r\u0004:��τ��r�an� �a�-�p��R�Xεj�ʪ%\u001a��f`���͓�_\u0004�K��\u001c-\t�&��2-\u001f�'\u0001�\b0��қ�%\u0001�\u0004\u0018X��c�$�\u0017\u0001\u0006�_zs�$`�\u0000\u0003˴|l�\u0004�\"���Ko��\u0004L\u0013``���͓�_\u0004\u0018X~��ђ�i\u0002\f,��y\u0012�\u0000\u0003�/�9Z\u00120M��eZ>6O\u0002~\u0011``��7GK\u0002�\t0�L���I�/\u0002\f,���hI�4\u0001\u0006�i��<\t�E����\u001c-\t�&��2-\u001f�'\u0001�\b0��қ�%\u0001�\u0004\u0018X��c�$�\u0017\u0001\u0006�_zs�$`�\u0000\u0003˴|l�\u0004�\"���Ko��\u0004L\u0013``���͓�_\u0004\u0018X~��ђ�i\u0002\f,��y\u0012�\u0000\u0003�/�9Z\u00120M��eZ>6O\u0002~\u0011``��7GK\u0002�\t0�L���I�/\u0002\f,���hI�4\u0001\u0006�i��<\t�E����\u001c-\t�&��2-\u001f�'\u0001�\b0��қ�%\u0001�\u0004\u0018X��c�$�\u0017\u0001\u0006�_zs�$`�\u0000\u0003˴|l�\u0004�\"���Ko��\u0004L\u0013``���͓�_\u0004\u0018X~��ђ�i\u0002\f,��y\u0012�\u0000\u0003�/�9Z\u00120M��eZ>6O\u0002~\u0011``��7GK\u0002�\t0�L���I�/\u0002\f,���hI�4\u0001\u0006�i��<\t�E����\u001c-\t�&��2-\u001f�'\u0001�\b0��қ�%\u0001�\u0004\u0018X��c�$�\u0017\u0001\u0006�_zs�$`�\u0000\u0003˴|l�\u0004�\"���Ko��\u0004L\u0013``���͓�_\u0004\u0018X~��ђ�i\u0002\f,��y\u0012�\u0000\u0003�/�9Z\u00120M��eZ>6O\u0002~\u0011``��7GK\u0002�\t0�L���I�/\u0002\f,���hI�4\u0001\u0006�i��<\t�E����\u001c-\t�&��2-\u001f�'\u0001�\b0��қ�%\u0001�\u0004\u0018X��c�$�\u0017\u0001\u0006�_zs�$`�\u0000\u0003˴|l�\u0004�\"���Ko��\u0004L\u0013``���͓�_\u0004�\u001ft��O{\u001f8�\u0000\u0000\u0000\u0000IEND�B`�", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '8369',
  'content-type': 'image/png',
  expires: '-1',
  server: 'Microsoft-IIS/10.0',
  'content-disposition': 'attachment; filename=bot-framework.png; size=8369',
  'request-context': 'appId=cid-v1:6814484e-c0d5-40ea-9dba-74ff29ca4f62',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000',
  date: 'Thu, 04 Jan 2018 20:57:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443')
  .get('/v3/attachments/at14013-6gmZyfEzyRJ/views/original')
  .reply(200, "�PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0001,\u0000\u0000\u0001,\b\u0006\u0000\u0000\u0000y}�u\u0000\u0000\u0000\u0004gAMA\u0000\u0000��\u000b�a\u0005\u0000\u0000 hIDATx\u0001�\txV噆?\b$,a\r�\u0004Dd\u0013�jպ�(VA[��L/;��Wg���m\u001d7p\u0003w\u0004�٧�֙�U�.���\u0019\u0017\\\u0000Aq+&!\t[�\u0002\u0004��9�T\tȿ����{��j#Y��~��|�����腫�:\u0016\t�\u0000\t\u0018 ��@�l�\u0004H�\u0004\u0002\u0002\f,\u001a�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��(\t�\u0000\u0003�\u001e \u0001\u00120C��eF*6J\u0002$���\u0007H�\u0004�\u0010``�����\u0000\t0��\u0001\u0012 \u00013\u0004\u0018Xf�b�$@\u0002\f,z�\u0004H�\f\u0001\u0006�\u0019��n�����i�\u00007����_N�o`���\u0003x��E���\u0012=19o?�܍\u001fQ��M��6�\u0010V\u0018�9�\u0001<\u0018Z)1��a0�R�'&�\u001c��'\u000f�\u0016��W�\"/C+\f+�\u001f\u0005\u001e���\np���\u0018X�e�,\nΞX�N�\u0017V�p|\u000b��a\u0015r\u0000\u0017�\u0001'�}\u0002�Ѱ��aU�N=�ye�r(��Vka\u0015�\u0000��\u0013+\u0018Z!\u0010�_\u0019XF��$��&��!��*\u001cV�C���\n9�\u0013x�\u001b�.\u0001�gP� ��+w��\b�phi\r�l�*�\u0000^�\t7�VH��W\u0006�1�0�n�Iw�a�s�<m��kX���\r�\u0018Z!\u0011[_\u0019X��*\u0012�n9�ܝ�cX�CLKh�\u001bV!\u0007�\u0003G�d�\"@Ɍ�\u0015�ՙCs[Y�\u001c���*4�B\u001e���\ni����2�\u0015���\t��\u0002�*\u001c��Њ*�B\u000e�\t�\\i�D�����p�puɬs\u0006�1�\n[Y�\u001c��Њ:�B\u001e�\n���'$��\f�\u0004�\u0013��\\\u00137vx�J�ah\r��Ye�Qm\u0014��r\u001b�Q�k\u000f\u0019Z\u001at��&\u0003+Z��m\r�g�bX��~�~�[��)�g\"��?�Y\b-�fhiR.|�\f��\u0019F���\u0012V7�n�8��U��Ҫ�nƣ5��io��D~E�\u0013�j\u0016x�;���I���0]0Yn\u001c? �ۀfkoW7��\f�U�\u0000��~ѷf�.\u000f���Ҥ���\u0019X����/1I�\u001f'a5R�U��;5��b�v�\u0013��\n�\r��_��5\u000b��\u0003CK�r~�f`��-��^�u���s\u000f�\u000f�+\u001f�v�v%{7�5��\u001b�k�\u0016t�\u001e�;lM���>\u0003�}����aX�wx���\u001f�?ޕ���\ny����h\u0016�`hi\u0012�}�\f�ܙE�\u0017\b�k�|�(ݰZ���]axe�\u0012:B\u000b���4\u000b�@\u001f��4)g�m\u0006V��\"�ML�k��w�+��� �j��\u0006�\u0006�9�j\u001cƧY�\u0007:1�4)g�m\u0006Vv�T~\u000b��#tWV+j\u001b��Gj�֝{T���\u001bŸ0�\u0015�;T[�NЋվ\u0004\u0018X���gg�S\u000f���v���\u001bV�tAh-�v\u0018�f!��\u001b��\b0�ځ�O��s�����+���v[R��j\t\u000f�.��qk\u0016t�~��!�����O�쓏�\r�U2i���ݼ#����I��b�\u0018�fA?�Ȋ�\u0000\u0003+F�W���]�\u001dV�;�T\u000f�*�\u0011���\u0012\u000e�\u0005\u001d�'+^\u0002\f��x�8����hݕ��2I�=��ʪ���JK8��fAO�ʊ�\u0000\u0003+\u0006�W�Q�~�nX}�NVV2I\u001b<�\rlM>p\u0000\u000fp�,�\n}Y�\u0010``)s�B�|ɱ�T_e���\f�\f���\u0002\u001f͂�Й�O����x��e�\u001b�a�a\u0010VUnS�_\u0007س�\r\\�>\\��I��3�f�\u0012``)�&���tWV\u001f�M�.�ɸ�auP\u0015���E\u0012Z�7\u0001��SG3�\u000e*F�?d`\u0015\b0ӟ_>����rX�\u000e�\f�L�3o�v\t-\tw�;�~��^\u000e��t\b0�\"�:崾�;���x��o��\r\b�j�I�ʞ@shU;��,�\u000f\u001f��'�����Ť�=^7�>AX=T�6l�\u001da��l\n��\u000f\u001c5\u000b>�\u001fX�\u0012``E��/N���(���\"�m=ê ��\u000f+T�Ђ\u001f�\u000bVt\u0004\u0018X\u0011���)}ݟ|Ywe�����@�U\u0004��&�mk\u000e-p�,�\u0002�`EC��U ��N��w�nX�~�`7\u0006��\u0015\u001d� �d�\n��\u0005�'��\t0�\n`�C1�'�\u001aqͦ]n�|�Uϰ*@���\u0014\\�\u0017�5\u000b>�_X�\u0011``���Ͽ��}?��zH�j+WVyʔ՟��\u0014�\u001dZ�\u000b|�ʟ\u0000\u0003+\u000fv?8���S��f}ր��*Wǰ����m�3x��f�7�\u000f+?\u0002\f�\u001c�����ϔ�%�d�L�M��eX�Na�\u000e��\u000e��\u0005��G��\t0�r`��\u0013\u0011V���T#��@0�*\u0007a\"�� ��?t�,�\b~b�F���%�K哞\u001f��\u001bV5�w�\u001f�dY��)ˮ�k\u001a\u0004�\u001f:@\u000f͂��+V�\u0004\u0018XY����Ks��4\f�,���W�\n-�\n�beG���\u0006���?峕k67\u0005����J\u000e��t���K����P-�\u0013\u0006�A�����/��;9�\"PͰ:�\u0012��#�\u0002}�w�q\t\u000f��:8\u0001\u0006V+|�+�\t���t�mT����ҫ\u001a��jE�D|\u001b�@'�Y�\u001b|�j�\u0000\u0003+\u0003��i�(߈�N̏�\u0015?cXeP y߂N�\u000b�i\u0016|\u0007��2\u0013``���m�����a�\u0015�B1�Z�O�?�В��:�O��?��u \u0001\u0006�\u0017�|�؞n��}�av���\u0000���ٴo��\u001cZ�!��ڟ\u0000\u0003k\u001f�o�9������z19n\u001e\u0007ӳ�\u0012�~�\u0011zj\u0016�\b_�>'��\u0012\u0016�ȳ�P\u000e�u���rӸ�+�\u0015�si�_�\u0004�#􄮚\u0005_�f\u0002�\u0007V� L���\u0017S�r�O��DS�K\u0000z\u0006w�U\u000e�+ş_S~jx���5�\u0003\u000b&�~j/�*sZ�˸Bkƙe\f-1���u�Q=\u001cLСC\u0007�y�a�mx?��J�q\u00126\f}�{\b��\n>�_�[�����,�_}V?ݰ\n\u001etP%��ҽ��g�&i��\u0019g�k>�\b�\u0005�¿��w�5��\u001e�'�a�q_X}İ�j^Ao�\u0016��*�\u0016�\u000b\u001f�X^\u0005օG�p?\u001d���j\u000e�jy�0WV>N(��C�Ђ��g�ʛ���R���u�jS�n7U���<F��/\u0001�?mQ��\u001f�\n+-�\u0019����\b,�z����Ǭ\u001aĜ�$�V3�|�?����u\u0012Z�\u0007�B�\u0010Z�O�����xxsXu\u0014q�\n��*��IY$\u0010\u0012�\u001f�\u000b�Ђ�\u0011Z�\u000f���:OD�v\\�\u001aV;de���gX�0ar\u001d#|\u00014�O�\n������Wj\u0003�ܑ��:��,&�.f\\ŰJ�<)h|�\u0007|\u0002�h\u0015B\u000b~���\\�\f�\t1���:���<A�\u001a\u001b|\u0012Wh��i���\u0017L�����\u001f���0~�+�w�jˎ=b�\u001a����*\u0012,�{wv�ˊ��u/����u�M{\u0013k��];��}��\u0011�K\\��E��\f\u0002\u001a$���(��L���4���K]q'\u001db�u�a�ܧrqv\u001aO��0z�jk�gv�|w�����sb\b�G�݊�\u001d����\u001f\u001cS^\u0012\\�6Z�ܳ��\u0016W��pO���~��&�mW�[�[�\u000e����r�D�Q\u0012T-\u000bǄ^�x����\u0006��Z[Z\u001c9��ͽ�ҕ�����7�YOպ%�i�*5�5V�=Sª���j�N����rCaէk��JΌ>{X��|�KK\u001exu�{��Y���/] 'D�\f�=�z�í���U/�ɦ�\\~�(�֤J�\u0015�Va�<SB�\u0014�V*v\t1\u0019gM�\u000f�+ee��PX��ݾ�\u0017\rtǔw�zNt��ѝ9���ۭ����m��vawu���e�Q�m\u001d֧؍\u001fQ���l�[�xYL��d�{u[w�7���\nRv\u000f1p����Y�%�sL�5��\u0003k��n�s��WV\b+K�\u001e�zvr\u000f|m�+��)����\u0016�p^�d[^��\u001fa%��}�Je���G��6��-\u000bU\u001bSh��7���4�5$���\u0004:��!\u0012V\u0013t�jۮ=nƣ��\n���ϯp=�d�K՚�\u0017���&�t�-^\u0007�WHa�\u0018w\u000e��B^.��ś �\u0005�i\u0015\u000e�`�`�X/��5�Og7\u0013��J�i\b\u001b��#5�\u001a[\u0007u/9�W�Z\u0014��S�5���Gl\u001f�\u0013E��D��R�_3�g��%�\u0004�\u0005��r�\r,\\��M�t���]�h�{��є�8\u001er�\t�#빗�Z����-y�\u0002^'�����\u000bE�c���g�\u001b|�U�/�7��d`�zhWwt\u000e\u0007�s\u0015\b��!�y��VXa�'\u000e�Z�`K^8oH�p�9�®!8X+�M;�0o0����\u001a��G����(au�om�\u0015�;zH�f\u001c&�6���w�-\r�]l?���\u0010u����TB\u000b��\u000f�Js�h�\u001cn�d`\u001dW\u0019��\u0004�0�ެ���\n\u0005\u001d�S�\u0018�@��Q�����A�A�m����5Z�C��&\u0003\u000b�gD];�de�X�{�pX�I�\u0002�`�r^�F�)m\u0017�Y.�\u0010~�/�.��\u0013u��m�d`i\\8���J�L��O�\u001dJ�\u0004Z����\u001a.�\u000f��?�G�2�L��\f��\u0012��vqA�m\u0013��i�\u000fH���r2�F��]�Rۮ\u0012\u0007\r\u0006��\t\u001f�\u0016?Q������ֶg2�p`R��Q�m\u0013+L���>�sưZ�X���خ�jh�\u0002\u0007\r�e�&>Ń\u000f5�\n��52�%��\f,�U@�\u0010Z��,'\u000f�9���w���?��R���lwەv5�]l?�zA�C�=f��)�;�O�<�%\u001fl���&�g2�^\u0013�/�\u000bG�\nf�#��\u000f�\u0017Zxb��Ѯ@\u001f^Ѡ�:�n��_&���\"�\r���a�y��g��C�\u001c-6n2�0���֩�r��SG7��r�\u0015��u�+�[Ȝ�?ߑ3�5Vm_�\b���DU\u000b#\u001cT=��\u001d�\f~��\n�hƼ�\\zt������{�V��G�:�s���$c��c\u0014�|gS8�����_sb28^\u0007�Wha�֎��_�fX�8!�\u000b��2\u001bX��]�k\u001e�Q\u000f�;�L'\f���RI0ļ��\u0005��ʷ�]b�\u001b\u0017��v\u001f%ܯ\t���ͷp�.��R�W�vXa�`�X/����;�*���X�\u001eM�>�=�8�\u001c�]�m��l�\u001d\n����[�\u001b��^�\u0014�:�k�^�\u001b��Yk�>�o����6ι��\u000f=>����ZR�\nȻ8�\u001a��\t\u0003��;�Z�(^ď7����z��x�Ԃi>�\u0000&\b-y�\u0012��R\u000b-9\u0010�\u001b��XK��В�zIn��������ں�0n������z�uh�����s�\u001e[�%\b�����<q\u00127���L�{�Mno��3����v�,auW\u001ca��Z�JJ�\n0SsOw\f\u00067(��<���}��;9�V���$�-sq?�~�;I(tp��Ъ�&y\u0007�&\u0007׷:ܺ7)�_.3B��\u001e���C\\n�]\u001e�Q��)��>�]*��HΚ��*���/��y\u0015�� ���V�\noXi�T\u0005\u0016�9Cv'n�-�eE�UVCK�\u0007��=�8ª\ta��Z��<U(me��{&1 �u\"\u0016D�*\u001c_�K�!�Ta�@�\u0016\u000fn7;\u0002�\u000b|������[�=��ư�\bS\u0017X\u0018�\u000b\u0012Z�/�\r-ܽ��\u000b+ܱ\u0015�\u001d�F,�\b�'��]r\u0011V�=���Je`A,��x�<�\r\u0007��*\b�\u000b*�1Z\f--�i�.�q��D5�����I��Gj\u0003\u000b`��'�ۣ\u0019Zx��=�\u0014ߣ\u0019Z���D�>|\u0001h>�\u0003������W�\u0003\u000b�AD<�V;��\u0015S��7\u0016\t�\u0004�\u0007�B;��o\u001f�\n\\S\u001fX\u0018$\u001e�}���[q�\u0010��9�\u0000R\u0016\t�\u0007�a\u0005?��iz\u0014}[��\"�\u0000a��Vp&�bh��tts%�r=��-��s[\u0004�?|\u0000?h\u0015�\n~��}*=�\t��䃭���TWZAhM��Њ�I0\tDʖZ\u0010��sE���g�ʫ�������n\u0011��(^�ѣ�HL[�F1���O�\u001b�C��o�_����.� �1���r=\u001c+�\u0004�s\\a\u0005��Z^\u0006\u0016�~b�\u0016w��J�����'︸���^\u0002�\u0017:Co���\n~�o}.o\u0003\u000b�?.��J��C<6}��\u0019wK`��\u0000t���Y��O�\u0014~���\u000e,��[��\t̰W�V\u0010Z�+��\f�4M8�9Ot�\f+�\u0012��OY���Ֆ�0Üg�UC�\u0017VZb�a\f���0�s�\b=��V!��K��焽_a�(\u001eyo���9���ݵ��\u0017�\u000f��9|Y~5H\u0000�!���V!��G���9\u0001\u0006��,ܢ\u0015��\u001d��\u0011Z\u0003��>\f�/�7��m��m޽��\u0001!��C���?\u0001\u0006��<��r��;�C\u000b�*��\u000fch����B�8�\n��\u000fY\u0007\u0012``\u001d�$����/�>}����\u0017��Czs��A��}\u000b:A/�UXY�w��>+3\u0001\u0006Vf.���\u001a�<���4�o����-���\u001d�Њ\u0006��V�\u000ft�^�uϋ�\u0002�i���m3�\u000e���mp�0�\u000eB(�?�-��g�\u001b��\u0004\u0018X\u0007���GLt+�2y�����^�=lC�X\f=�\u000b��,�\u000b>c�M���6#y�{���%���c���n�!�t'G\u0016��\b\u0001�\u0000=��f�W�\u0017+;\u0002\f��8��z�A�1��er,�O\u000f\u0007�3�X�G\u0000��\u0003�Ьy/�\u000b|��\u001ai�6\u0003+\u0007E���Mn�˺�\u001e�/�����,��*�\n���f�G�\u0013+7\u0002\f��x\u0005�D_\u0010Ch-`h�L�\u001e��b\b+����\u0018V�(��ʃ�/�l\u000b_�]i\r�w��2y�v�>\u0001p\u0006op�,�\u0006�a�G���\u001f7��K7�\u0007^]��_g�g�\b-9�R�Cw\u0012e�Mz\u000b|�\u0019�5\u000b~�oX�\u0013``����ۛ\u001b���N7�*d2�E|eEO .��\t��*�\u0000\u0003�0~�_����V=��Lk9\u001fH{\u0005P \ns\u000e��Z�C��7�\u0003>a\u0015N��U8C��bƿ�_ݕVe����\u0015C+\u0002��M ��\u0013\\5\u000b��?X�\u0010``E�������\u001f�O?��{8���\u0005�\u0011�H�f�\u000f\u001c��\n~�/X�\u0011``E����k\b�\r\u0011n��M\r�\u0015���qR#C�@:m\u0007��\u000f\u001c5\u000b>�\u001fX�\u0012``E�SL�����O�\u0006!�p�\u0010C+'�AX\t7��,�\u000f\u001f��'������{yw��뺆=D.�Eh�che� 8�\u0017�i\u0016t��,\u001d\u0002\f,\u001d�r\u0010~�|2�k� ����~�7�S�\u0013�f�\u0007�\u0006j�\u0015��,=\u0002\f,=�r��\u0006��ʟ\u0010\rƝ0�\u0000r\u0019C+���\u0002>�Y�\u0019z�t\t0�t������C{\u0017\u0007�m��\u0014\u0017eL*�\u0007\u000f��\n|4\u000b'�Bg�>\u0001\u0006�>��\u0012��X���ѐ>��G�\f�fA�\u0001�.��fAW�K�4���m\u0006VL����z��\u0018B\u000b�?x*��\u0015<�(����Е\u0015\u001f\u0001\u0006V|��\u00021��o鮴\u000e�\u0015\u0005v�zw�SZ�\u001b�\u0007\u0007͂�Г\u0015/\u0001?]\u001d/��^m����.��W�\u000f�Ǩ��\u0003���%/Ƌqc��\u0005��#+~\u0002~9:~�\u0019_�>�5�+��0�B+\f+�[��\u001b�c�\u000f\u0001\u0006V�pws��|Gw�5���͓\u0015G����0>�\u0013��,�\u0005�X�G���~���a��Yt��5<\b�J׳$�Rc\\��\u0015ƩY�\tz�ڗ@:]ܾLszu<�\\�\u0001�#�J�I���\n�\n��,�\u0003�X�O����\u001a�d�w�Y��l���J�}�\u0012鑒�\u0016Ɓ�`\\�\u0005]�\u000f+\u0019\u0004\u0018X�����|�{h�nh\u001d.�{�$�����80\u001e͂\u001eЅ�\u001c\u0002\f��h��x��=�\u001dZ�e�e8���\u0015�JơY�\u0001z��E���,=��2I\u0016��]i���~��ؖ��\u0017}��\u0002��J\u001e\u0001[�M\u001e?���<[�\u001e}o�ʶÍ\u001e9��͝T�\u001b\t-�~ѷf�;���I���L]��g�b\b�.n�\u0015���CB)4�����\u0003�����\u0002wVr\t0�\u0012��^�\u000b�籕�+��Սn�n�Zr\u000b��Yը� 8�w�I�\"0�q\u0006V�e����:��Rh��(V�6�\u0010OMVz\u0010)��3�*��a_k\f��k�It�L�'VE�Ҳ\u0014V�D\u001a�\u0005��˰\n)'�+\u0003+��\u0004݅���-�tk1�G\u0019Z�ɰ\n���������#�u�ӵ��\u000b\u000b-�a\u0015J\u0015Eh�#x�+�\u000e\u0001\u0006�\u001d���5k���\u0007��V\u001a�*����\u0002?pdX�4�|e`��*�\u0014�즧j�ӫs\u000b�4�U(Y>�\u0005n�ǰ\n)������W�-�B����=�eh�1�B�r\t-�\u0002����\u0011\u000e�_3\u0010``e�b�[�t7��{�í\u0007m7�a\u0015\u000e<��\u0002'�bX��l~e`��-�\u001a���k�s���\u000fa\u0015�w��\u0002\u001fpbX���~e`��.�|�\u001e算���G���p����B�� Sh�\u000b��\u0013�>\u0001\u0006�}\r��xݓk�\u000b�B\u000ba���c}1��\u0003\\\u0018V�qB��\u000bWˎ\u0005+\r\u0004:��τ��r�an� �a�-�p��R�Xεj�ʪ%\u001a��f`���͓�_\u0004�K��\u001c-\t�&��2-\u001f�'\u0001�\b0��қ�%\u0001�\u0004\u0018X��c�$�\u0017\u0001\u0006�_zs�$`�\u0000\u0003˴|l�\u0004�\"���Ko��\u0004L\u0013``���͓�_\u0004\u0018X~��ђ�i\u0002\f,��y\u0012�\u0000\u0003�/�9Z\u00120M��eZ>6O\u0002~\u0011``��7GK\u0002�\t0�L���I�/\u0002\f,���hI�4\u0001\u0006�i��<\t�E����\u001c-\t�&��2-\u001f�'\u0001�\b0��қ�%\u0001�\u0004\u0018X��c�$�\u0017\u0001\u0006�_zs�$`�\u0000\u0003˴|l�\u0004�\"���Ko��\u0004L\u0013``���͓�_\u0004\u0018X~��ђ�i\u0002\f,��y\u0012�\u0000\u0003�/�9Z\u00120M��eZ>6O\u0002~\u0011``��7GK\u0002�\t0�L���I�/\u0002\f,���hI�4\u0001\u0006�i��<\t�E����\u001c-\t�&��2-\u001f�'\u0001�\b0��қ�%\u0001�\u0004\u0018X��c�$�\u0017\u0001\u0006�_zs�$`�\u0000\u0003˴|l�\u0004�\"���Ko��\u0004L\u0013``���͓�_\u0004\u0018X~��ђ�i\u0002\f,��y\u0012�\u0000\u0003�/�9Z\u00120M��eZ>6O\u0002~\u0011``��7GK\u0002�\t0�L���I�/\u0002\f,���hI�4\u0001\u0006�i��<\t�E����\u001c-\t�&��2-\u001f�'\u0001�\b0��қ�%\u0001�\u0004\u0018X��c�$�\u0017\u0001\u0006�_zs�$`�\u0000\u0003˴|l�\u0004�\"���Ko��\u0004L\u0013``���͓�_\u0004\u0018X~��ђ�i\u0002\f,��y\u0012�\u0000\u0003�/�9Z\u00120M��eZ>6O\u0002~\u0011``��7GK\u0002�\t0�L���I�/\u0002\f,���hI�4\u0001\u0006�i��<\t�E����\u001c-\t�&��2-\u001f�'\u0001�\b0��қ�%\u0001�\u0004\u0018X��c�$�\u0017\u0001\u0006�_zs�$`�\u0000\u0003˴|l�\u0004�\"���Ko��\u0004L\u0013``���͓�_\u0004�\u001ft��O{\u001f8�\u0000\u0000\u0000\u0000IEND�B`�", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '8369',
  'content-type': 'image/png',
  expires: '-1',
  server: 'Microsoft-IIS/10.0',
  'content-disposition': 'attachment; filename=bot-framework.png; size=8369',
  'request-context': 'appId=cid-v1:6814484e-c0d5-40ea-9dba-74ff29ca4f62',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000',
  date: 'Thu, 04 Jan 2018 20:57:15 GMT',
  connection: 'close' });
 return result; }]];