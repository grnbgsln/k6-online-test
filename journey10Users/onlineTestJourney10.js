// Creator: k6 Browser Recorder 0.6.2

import { sleep, group, check } from 'k6'
import { SharedArray } from 'k6/data';
import { Trend } from 'k6/metrics';
import http from 'k6/http'

//group 1
const tag_LoginApplicant = new Trend('tag_LoginApplicant')
const site_Css1 = new Trend('tag_Site_css1')
const kendo_Common1 = new Trend('tag_kendo_common1')
const kendo_Boostrap1 = new Trend('tag_kendo_boostrap1')
const kendo_jquery_min1 = new Trend('tag_kendo_jquery_min1')
const kendo_web_min1 = new Trend('tag_kendo_web_min1')
const kendo_MessageBox1 = new Trend('tag_kendo_MessageBox1')
const sweet_js1 = new Trend('tag_sweet_js1')
const common_js1 = new Trend('tag_common_js1')
const constant_js1 = new Trend('tag_constant_js1')
const login_js = new Trend('tag_login_js')
const loginViewModel_js = new Trend('tag_loginViewModel_js')
const aiStandard_logo1 = new Trend('tag_aiStandard_logo1')
const logosatu_png1 = new Trend('tag_logosatu_png1')
const laoding_image1 = new Trend('tag_loading_image1')
const getCompany1 = new Trend('tag_getCompany1')
const getCompany2 = new Trend('tag_getCompany2')
const userLogin1 = new Trend('tag_userLogin1')
const userLogin2 = new Trend('tag_userLogin2')

//group 2
const congratulations_html = new Trend('tag_congratulations_html')
const site_Css2 = new Trend('tag_Site_css2')
const kendo_Common2 = new Trend('tag_kendo_common2')
const kendo_Boostrap2 = new Trend('tag_kendo_boostrap2')
const kendo_jquery_min2 = new Trend('tag_kendo_jquery_min2')
const kendo_web_min2 = new Trend('tag_kendo_web_min2')
const kendo_MessageBox2 = new Trend('tag_kendo_MessageBox2')
const sweet_js2 = new Trend('tag_sweet_js2')
const common_js2 = new Trend('tag_common_js2')
const constant_js2 = new Trend('tag_constant_js2')
const congratulations_js = new Trend('tag_congratulations_js')
const congratulationsViewModel_js = new Trend('tag_congratulationsViewModel_js')
const aiStandard_logo2 = new Trend('tag_aiStandard_logo2')
const logosatu_png2 = new Trend('tag_logosatu_png2')
const laoding_image2 = new Trend('tag_loading_image2')
const getUserData1 = new Trend('tag_getUserData1')
const getUserData2 = new Trend('tag_getUserData2')

//group3
const sampleTest1 = new Trend('tag_sampleTest1')
const site_Css3 = new Trend('tag_Site_css3')
const kendo_Common3 = new Trend('tag_kendo_common3')
const kendo_Boostrap3 = new Trend('tag_kendo_boostrap3')
const kendo_jquery_min3 = new Trend('tag_kendo_jquery_min3')
const kendo_web_min3 = new Trend('tag_kendo_web_min3')
const kendo_MessageBox3 = new Trend('tag_kendo_MessageBox3')
const sweet_js3 = new Trend('tag_sweet_js3')
const common_js3 = new Trend('tag_common_js3')
const constant_js3 = new Trend('tag_constant_js3')
const jquery_plugin_js1 = new Trend('tag_jquery_plugin_js1')
const jquery_countdown_js1 = new Trend('tag_jquery_countdown_js1')
const sampleTest2 = new Trend('tag_sampleTest2')
const sampleTestViewModel = new Trend('tag_sampleTestViewModel')
const aiStandard_logo3 = new Trend('tag_aiStandard_logo3')
const logosatu_png3 = new Trend('tag_logosatu_png3')
const getUserData3 = new Trend('tag_getUserData3')
const getUserData4 = new Trend('tag_getUserData4')
const startTest1 = new Trend('tag_startTest1')
const startTest2 = new Trend('tag_startTest2')

//Group 4
const SCH22037933 = new Trend('tag_SCH22037933')
const siteCss4 = new Trend('tag_Site_css4')
const kendo_common_min_css = new Trend('tag_kendo_common_min_css1')
const kendo_bootstrap_min_css = new Trend('tag_kendo_bootstrap_min_css1')
const jquery_min_js = new Trend('tag_jquery_min_js1')
const kendo_web_min_js = new Trend('tag_kendo_web_min_js1')
const MessageBox_js = new Trend('tag_MessageBox_js')
const sweet_js = new Trend('tag_sweet_js10')
const common_js = new Trend('tag_common_js10')
const constant_js = new Trend('tag_constant_js10')
const jquery_plugin_js2 = new Trend('tag_jquery_plugin_js2')
const jquery_countdown_js2 = new Trend('tag_jquery_countdown_js2')
const Question_js = new Trend('tag_Question_js')
const QuestionViewModel_js = new Trend('tag_QuestionViewModel_js')
const AIStandard_Logo_gif = new Trend('tag_AIStandard_Logo_gif')
const logosatu_png = new Trend('tag_logosatu_png10')
const Question_Get = new Trend('tag_Question_Get1')
const Question_Get2 = new Trend('tag_Question_Get2')
const SubmitPerSoal_pg1 = new Trend('tag_SubmitPerSoal_pg1')
const SubmitPerSoal_1 = new Trend('tag_SubmitPerSoal_1')
const SubmitPerSoal_pg2 = new Trend('tag_SubmitPerSoal_pg2')
const SubmitPerSoal_2 = new Trend('tag_SubmitPerSoal_2')
const SubmitPerSoal_pg3 = new Trend('tag_SubmitPerSoal_pg3')
const SubmitPerSoal_pg4 = new Trend('tag_SubmitPerSoal_pg4')
const SubmitPerSoal_pg5 = new Trend('tag_SubmitPerSoal_pg5')
const SubmitPerSoal_pg6 = new Trend('tag_SubmitPerSoal_pg6')
const SubmitPerSoal_pg7 = new Trend('tag_SubmitPerSoal_pg7')
const SubmitPerSoal_3 = new Trend('tag_SubmitPerSoal_3')
const SubmitPerSoal_pg8 = new Trend('tag_SubmitPerSoal_pg8')
const SubmitPerSoal_pg9 = new Trend('tag_SubmitPerSoal_pg9')
const SubmitPerSoal_pg10 = new Trend('tag_SubmitPerSoal_pg10')
const submitPerSoal = new Trend('tag_submit_per_soal1')
const submitPerSoal2 = new Trend('tag_submit_per_soal2')
const submitPerSoalWm1 = new Trend('tag_submit_per_soal_wm1')
const submitPerSoal3 = new Trend('tag_submit_per_soal3')
const submitPerSoalWm2 = new Trend('tag_submit_per_soal_wm2')
const submitPerSoal4 = new Trend('tag_submit_per_soal4')
const submitPerSoal5 = new Trend('tag_submit_per_soal5')
const submitPerSoalWm3 = new Trend('tag_submit_per_soal_wm3')
const submitPerSoal6 = new Trend('tag_submit_per_soal6')
const submitPerSoal7 = new Trend('tag_submit_per_soal7')
const submitPerSoal8 = new Trend('tag_submit_per_soal8')
const submitPerSoalWm4 = new Trend('tag_submit_per_soal_wm4')
const submitPerSoalWm5 = new Trend('tag_submit_per_soal_wm5')
const submitPerSoal9 = new Trend('tag_submit_per_soal9')
const submitPerSoal10 = new Trend('tag_submit_per_soal10')
const submitPerSoalWm6 = new Trend('tag_submit_per_soal_wm6')
const submitPerSoal11 = new Trend('tag_submit_per_soal11')
const submitPerSoal12 = new Trend('tag_submit_per_soal12')
const submitPerSoal13 = new Trend('tag_submit_per_soal13')
const submitPerSoalWm7 = new Trend('tag_submit_per_soal_wm7')
const submitPerSoalWm8 = new Trend('tag_submit_per_soal_wm8')
const submitPerSoal14 = new Trend('tag_submit_per_soal14')
const submitPerSoal15 = new Trend('tag_submit_per_soal15')
const submitPerSoal16 = new Trend('tag_submit_per_soal16')
const submitPerSoalWm9 = new Trend('tag_submit_per_soal_wm9')
const submitPerSoalWm10 = new Trend('tag_submit_per_soal_wm10')
const submitPerSoal17 = new Trend('tag_submit_per_soal17')
const submitPerSoalVm1 = new Trend('tag_submit_per_soal_vm1')
const submitPerSoal18 = new Trend('tag_submit_per_soal18')
const submitPerSoal19 = new Trend('tag_submit_per_soal19')
const submitPerSoalVm2 = new Trend('tag_submit_per_soal_vm2')
const submitPerSoalVm3 = new Trend('tag_submit_per_soal_vm3')
const submitPerSoalVm4 = new Trend('tag_submit_per_soal_vm4')
const submitPerSoalVm5 = new Trend('tag_submit_per_soal_vm5')
const submitPerSoalVm6 = new Trend('tag_submit_per_soal_vm6')
const submitPerSoalVm7 = new Trend('tag_submit_per_soal_vm7')
const submitPerSoal20 = new Trend('tag_submit_per_soal20')
const submitPerSoalVm8 = new Trend('tag_submit_per_soal_vm8')
const submitPerSoalVm9 = new Trend('tag_submit_per_soal_vm9')
const submitPerSoalVm10 = new Trend('tag_submit_per_soal_vm10')
const submitAllSoal1 = new Trend('tag_submit_all_soal1')
const submitAllSoal2 = new Trend('tag_submit_all_soal2')
const submitPerSoal21 = new Trend('tag_submit_per_soal21')
const submitPerSoal22 = new Trend('tag_submit_per_soal22')

//group 5
const pageThankYou = new Trend('tag_page_thankyou')
const siteCss5 = new Trend('tag_Site_css5')
const kendoCommonMinCss = new Trend('tag_kendo_common_min_css2')
const kendoBootstrapMinCss = new Trend('tag_kendo_bootstrap_min_css2')
const jqueryMinJs = new Trend('tag_jquery_min_js2')
const kendoWebMinJs = new Trend('tag_kendo_web_min_js2')
const messageBoxJs = new Trend('tag_message_box_js')
const sweetJs = new Trend('tag_sweet_js11')
const commonJs = new Trend('tag_common_js11')
const constantJs = new Trend('tag_constant_js11')
const doneJs = new Trend('tag_done_js')
const doneViewModelJs = new Trend('tag_done_view_model_js')
const aiStandardLogoGif = new Trend('tag_ai_standard_logo_gif')
const logoSatuPng = new Trend('tag_logo_satu_png')
const getCompany3 = new Trend('tag_get_company3')
const getCompany4 = new Trend('tag_get_company4')


const data = new SharedArray('users', function () {
  // here you can open files, and then do additional processing or generate the array with data dynamically
  const f = JSON.parse(open('./token10.json'));
  return f; // f must be an array[]
});

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'per-vu-iterations',
      vus: data.length,
      iterations: 1,
    },
  },
};





export default function main() {
  let response

  const user = data[__VU-1]
  console.log(user.UserName)
  // console.log(`${user.AccessToken}`);
  group(
    `page_1 - https://onlineteststg.astra.co.id/Views/Applicant/Login/LoginApplicant.html?q=${user.q}}`,
    function () {
      response = http.get(
        `https://onlineteststg.astra.co.id/Views/Applicant/Login/LoginApplicant.html?q=${user.q}`,
        {
          headers: {
            dnt: '1',
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_LoginApplicant"
          }
        })
      tag_LoginApplicant.add(response.timings.duration, { my_tag: "tag_LoginApplicant" })
      check(response, { 'tag_LoginApplicant': (r) => r.status === 200 }, { my_tag: "tag_LoginApplicant" });

      response = http.get('https://onlineteststg.astra.co.id/Content/Site.css', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_Site_css1"
        }
      })
      site_Css1.add(response.timings.duration, { my_tag: "tag_Site_css1" })
      check(response, { 'tag_Site_css1': (r) => r.status === 200 }, { my_tag: "tag_Site_css1" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Content/kendo/2014.1.423/kendo.common.min.css',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_common1"
          }
        })
      kendo_Common1.add(response.timings.duration, { my_tag: "tag_kendo_common1" })
      check(response, { 'tag_kendo_common1': (r) => r.status === 200 }, { my_tag: "tag_kendo_common1" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Content/kendo/2014.1.423/kendo.bootstrap.min.css',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_boostrap1"
          }
        }
      )
      kendo_Boostrap1.add(response.timings.duration, { my_tag: "tag_kendo_boostrap1" })
      check(response, { 'tag_kendo_boostrap1': (r) => r.status === 200 }, { my_tag: "tag_kendo_boostrap1" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/kendo/2014.1.423/jquery.min.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_jquery_min1"
          }
        }
      )
      kendo_jquery_min1.add(response.timings.duration, { my_tag: "tag_kendo_jquery_min1" })
      check(response, { 'tag_kendo_jquery_min1': (r) => r.status === 200 }, { my_tag: "tag_kendo_jquery_min1" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/kendo/2014.1.423/kendo.web.min.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: 'tag_kendo_web_min1'
          }
        })
      kendo_web_min1.add(response.timings.duration, { my_tag: "tag_kendo_web_min1" })
      check(response, { 'tag_kendo_web_min1': (r) => r.status === 200 }, { my_tag: "tag_kendo_web_min1" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/MessageBox.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: 'tag_kendo_MessageBox1'
        }
      })
      kendo_MessageBox1.add(response.timings.duration, { my_tag: "tag_kendo_MessageBox1" })
      check(response, { 'tag_kendo_MessageBox1': (r) => r.status === 200 }, { my_tag: "tag_kendo_MessageBox1" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/sweet.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: 'tag_sweet_js1'
        }
      })
      sweet_js1.add(response.timings.duration, { my_tag: 'tag_sweet_js1' })
      check(response, { 'tag_sweet_js1': (r) => r.status === 200 }, { my_tag: "tag_sweet_js1" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/common.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_common_js1"
        }
      })
      common_js1.add(response.timings.duration, { my_tag: "tag_common_js1" })
      check(response, { 'tag_common_js1': (r) => r.status === 200 }, { my_tag: "tag_common_js1" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/constant.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_constant_js1"
        }
      })
      constant_js1.add(response.timings.duration, { my_tag: "tag_constant_js1" })
      check(response, { 'tag_constant_js1': (r) => r.status === 200 }, { my_tag: "tag_constant_js1" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Applicant/Login/Login.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tags: 'tag_login_js'
        }
      })
      login_js.add(response.timings.duration, { my_tag: 'tag_login_js' })
      check(response, { 'tag_login_js': (r) => r.status === 200 }, { my_tag: "tag_login_js" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/Applicant/Login/LoginViewModel.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tags: 'tag_loginViewModel_js'
          }
        })
      loginViewModel_js.add(response.timings.duration, { my_tag: 'tag_loginViewModel_js' })
      check(response, { 'tag_loginViewModel_js': (r) => r.status === 200 }, { my_tag: "tag_loginViewModel_js" });

      response = http.get('https://onlineteststg.astra.co.id/Images/AIStandard-Logo.gif', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tags: 'tag_aiStandard_logo1'
        }
      })
      aiStandard_logo1.add(response.timings.duration, { my_tag: 'tag_aiStandard_logo1' })
      check(response, { 'tag_aiStandard_logo1': (r) => r.status === 200 }, { my_tag: "tag_aiStandard_logo1" });

      response = http.get('https://onlineteststg.astra.co.id/Images/logosatu.png', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tags: 'tag_logosatu_png1'
        }
      })
      logosatu_png1.add(response.timings.duration, { my_tag: 'tag_logosatu_png1' })
      check(response, { 'tag_logosatu_png1': (r) => r.status === 200 }, { my_tag: "tag_logosatu_png1" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Content/kendo/2014.1.423/Default/loading-image.gif',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tags: 'tag_loading_image1'
          }
        })
      laoding_image1.add(response.timings.duration, { my_tag: 'tag_loading_image1' })
      check(response, { 'tag_loading_image1': (r) => r.status === 200 }, { my_tag: "tag_loading_image1" });

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/User/GetCompany',
        `q=${user.q}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tags: 'tag_getCompany1'
          }
        })
      getCompany1.add(response.timings.duration, { my_tag: 'tag_getCompany1' })
      check(response, { 'tag_getCompany1': (r) => r.status === 200 }, { my_tag: "tag_getCompany1" });

      response = http.options('https://onlinetestapistg.astra.co.id/api/User/GetCompany', null, {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'applicationcode,clienttag,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://onlineteststg.astra.co.id',
          'sec-fetch-mode': 'cors',
        },
        tags: {
          my_tags: 'tag_getCompany2'
        }
      })
      getCompany2.add(response.timings.duration, { my_tag: 'tag_getCompany2' })
      check(response, { 'tag_getCompany2': (r) => r.status === 200 }, { my_tag: "tag_getCompany2" });
      sleep(1)

      // response = http.post(
      //   'https://onlinetestapistg.astra.co.id/api/User/Login',
      //   `{${params.Username},${params.Password}}`,
      //   {
      //     headers: {
      //       accept: 'application/json, text/javascript, */*; q=0.01',
      //       applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
      //       clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
      //       'content-type': 'application/json',
      //       dnt: '1',
      //       'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
      //       'sec-ch-ua-mobile': '?0',
      //       'sec-ch-ua-platform': '"Windows"',
      //       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
      //     },
      //     tags: {
      //       my_tags: 'tag_userLogin1'
      //     }
      //   })
      // userLogin1.add(response.timings.duration, { my_tag: 'tag_userLogin1' })
      // check(response, { 'tag_userLogin1': (r) => r.status === 200 }, { my_tag: "tag_userLogin1" });

      // response = http.options('https://onlinetestapistg.astra.co.id/api/User/Login', null, {
      //   headers: {
      //     accept: '*/*',
      //     'access-control-request-headers': 'applicationcode,clienttag,content-type',
      //     'access-control-request-method': 'POST',
      //     origin: 'https://onlineteststg.astra.co.id',
      //     'sec-fetch-mode': 'cors',
      //   },
      //   tags: {
      //     my_tags: 'tag_userLogin2'
      //   }
      // })
      // userLogin2.add(response.timings.duration, { my_tag: 'tag_userLogin2' })
      // check(response, { 'tag_userLogin2': (r) => r.status === 200 }, { my_tag: "tag_userLogin2" });
      // sleep(1)
    }
  )

  group(
    'page_2 - https://onlineteststg.astra.co.id/Views/Applicant/Login/Congratulations.html',
    function () {
      response = http.get(
        'https://onlineteststg.astra.co.id/Views/Applicant/Login/Congratulations.html',
        {
          headers: {
            dnt: '1',
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tags: 'tag_congratulations_html'
          }
        })
      congratulations_html.add(response.timings.duration, { my_tag: 'tag_congratulations_html' })
      check(response, { 'tag_congratulations_html': (r) => r.status === 200 }, { my_tag: "tag_congratulations_html" });

      response = http.get('https://onlineteststg.astra.co.id/Content/Site.css', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_Site_css2"
        }
      })
      site_Css2.add(response.timings.duration, { my_tag: "tag_Site_css2" })
      check(response, { 'tag_Site_css2': (r) => r.status === 200 }, { my_tag: "tag_Site_css2" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Content/kendo/2014.1.423/kendo.common.min.css',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_common2"
          }
        })
      kendo_Common2.add(response.timings.duration, { my_tag: "tag_kendo_common2" })
      check(response, { 'tag_kendo_common2': (r) => r.status === 200 }, { my_tag: "tag_kendo_common2" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Content/kendo/2014.1.423/kendo.bootstrap.min.css',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_boostrap2"
          }
        }
      )
      kendo_Boostrap2.add(response.timings.duration, { my_tag: "tag_kendo_boostrap2" })
      check(response, { 'tag_kendo_boostrap2': (r) => r.status === 200 }, { my_tag: "tag_kendo_boostrap2" });


      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/kendo/2014.1.423/jquery.min.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_jquery_min2"
          }
        }
      )
      kendo_jquery_min2.add(response.timings.duration, { my_tag: "tag_kendo_jquery_min2" })
      check(response, { 'tag_kendo_jquery_min2': (r) => r.status === 200 }, { my_tag: "tag_kendo_jquery_min2" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/kendo/2014.1.423/kendo.web.min.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: 'tag_kendo_web_min2'
          }
        })
      kendo_web_min2.add(response.timings.duration, { my_tag: "tag_kendo_web_min2" })
      check(response, { 'tag_kendo_web_min2': (r) => r.status === 200 }, { my_tag: "tag_kendo_web_min2" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/MessageBox.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: 'tag_kendo_MessageBox2'
        }
      })
      kendo_MessageBox2.add(response.timings.duration, { my_tag: "tag_kendo_MessageBox2" })
      check(response, { 'tag_kendo_MessageBox2': (r) => r.status === 200 }, { my_tag: "tag_kendo_MessageBox2" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/sweet.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: 'tag_sweet_js2'
        }
      })
      sweet_js2.add(response.timings.duration, { my_tag: 'tag_sweet_js2' })
      check(response, { 'tag_sweet_js2': (r) => r.status === 200 }, { my_tag: "tag_sweet_js2" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/common.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_common_js2"
        }
      })
      common_js2.add(response.timings.duration, { my_tag: "tag_common_js2" })
      check(response, { 'tag_common_js2': (r) => r.status === 200 }, { my_tag: "tag_common_js2" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/constant.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_constant_js2"
        }
      })
      constant_js2.add(response.timings.duration, { my_tag: "tag_constant_js2" })
      check(response, { 'tag_constant_js2': (r) => r.status === 200 }, { my_tag: "tag_constant_js2" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/Applicant/Login/Congratulations.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tags: 'tag_congratulations_js'
          }
        })
      congratulations_js.add(response.timings.duration, { my_tag: 'tag_congratulations_js' })
      check(response, { 'tag_congratulations_js': (r) => r.status === 200 }, { my_tag: "tag_congratulations_js" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/Applicant/Login/CongratulationsViewModel.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tags: 'tag_congratulationsViewModel_js'
          }
        })
      congratulationsViewModel_js.add(response.timings.duration, { my_tag: 'tag_congratulationsViewModel_js' })
      check(response, { 'tag_congratulationsViewModel_js': (r) => r.status === 200 }, { my_tag: "tag_congratulationsViewModel_js" });

      response = http.get('https://onlineteststg.astra.co.id/Images/AIStandard-Logo.gif', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tags: 'tag_aiStandard_logo2'
        }
      })
      aiStandard_logo2.add(response.timings.duration, { my_tag: 'tag_aiStandard_logo2' })
      check(response, { 'tag_aiStandard_logo2': (r) => r.status === 200 }, { my_tag: "tag_aiStandard_logo2" });

      response = http.get('https://onlineteststg.astra.co.id/Images/logosatu.png', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tags: 'tag_logosatu_png2'
        }
      })
      logosatu_png2.add(response.timings.duration, { my_tag: 'tag_logosatu_png2' })
      check(response, { 'tag_logosatu_png2': (r) => r.status === 200 }, { my_tag: "tag_logosatu_png2" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Content/kendo/2014.1.423/Default/loading-image.gif',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tags: 'tag_loading_image2'
          }
        })
      laoding_image2.add(response.timings.duration, { my_tag: 'tag_loading_image2' })
      check(response, { 'tag_loading_image2': (r) => r.status === 200 }, { my_tag: "tag_loading_image2" });

      response = http.post('https://onlinetestapistg.astra.co.id/api/User/GetUserData', null, {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
          authorization: `Bearer ${user.AccessToken}`,
          clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
          'content-type': 'application/json',
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
        },
        tags: {
          my_tags: 'tag_getUserData1'
        }
      })
      getUserData1.add(response.timings.duration, { my_tag: 'tag_getUserData1' })
      check(response, { 'tag_getUserData1': (r) => r.status === 200 }, { my_tag: "tag_getUserData1" });

      response = http.options('https://onlinetestapistg.astra.co.id/api/User/GetUserData', null, {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'applicationcode,authorization,clienttag,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://onlineteststg.astra.co.id',
          'sec-fetch-mode': 'cors',
        },
        tags: {
          my_tags: 'tag_getUserData2'
        }
      })
      getUserData2.add(response.timings.duration, { my_tag: 'tag_getUserData2' })
      check(response, { 'tag_getUserData2': (r) => r.status === 200 }, { my_tag: "tag_getUserData2" });
      sleep(1)
    }
  )

  group(
    'page_3 - https://onlineteststg.astra.co.id/Views/Applicant/SampleTest/SampleTest.html',
    function () {
      response = http.get(
        'https://onlineteststg.astra.co.id/Views/Applicant/SampleTest/SampleTest.html',
        {
          headers: {
            dnt: '1',
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tags: 'tag_sampleTest1'
          }
        })
      sampleTest1.add(response.timings.duration, { my_tag: 'tag_sampleTest1' })
      check(response, { 'tag_sampleTest1': (r) => r.status === 200 }, { my_tag: "tag_sampleTest1" });

      sleep(1)
      response = http.get('https://onlineteststg.astra.co.id/Content/Site.css', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_Site_css3"
        }
      })
      site_Css3.add(response.timings.duration, { my_tag: "tag_Site_css3" })
      check(response, { 'tag_Site_css3': (r) => r.status === 200 }, { my_tag: "tag_Site_css3" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Content/kendo/2014.1.423/kendo.common.min.css',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_common3"
          }
        })
      kendo_Common3.add(response.timings.duration, { my_tag: "tag_kendo_common3" })
      check(response, { 'tag_kendo_common3': (r) => r.status === 200 }, { my_tag: "tag_kendo_common3" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Content/kendo/2014.1.423/kendo.bootstrap.min.css',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_boostrap3"
          }
        }
      )
      kendo_Boostrap3.add(response.timings.duration, { my_tag: "tag_kendo_boostrap3" })
      check(response, { 'tag_kendo_boostrap3': (r) => r.status === 200 }, { my_tag: "tag_kendo_boostrap3" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/kendo/2014.1.423/jquery.min.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_jquery_min3"
          }
        }
      )
      kendo_jquery_min3.add(response.timings.duration, { my_tag: "tag_kendo_jquery_min3" })
      check(response, { 'tag_kendo_jquery_min3': (r) => r.status === 200 }, { my_tag: "tag_kendo_jquery_min3" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/kendo/2014.1.423/kendo.web.min.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: 'tag_kendo_web_min3'
          }
        })
      kendo_web_min3.add(response.timings.duration, { my_tag: "tag_kendo_web_min3" })
      check(response, { 'tag_kendo_web_min3': (r) => r.status === 200 }, { my_tag: "tag_kendo_web_min3" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/MessageBox.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: 'tag_kendo_MessageBox3'
        }
      })
      kendo_MessageBox3.add(response.timings.duration, { my_tag: "tag_kendo_MessageBox3" })
      check(response, { 'tag_kendo_MessageBox3': (r) => r.status === 200 }, { my_tag: "tag_kendo_MessageBox3" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/sweet.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: 'tag_sweet_js3'
        }
      })
      sweet_js3.add(response.timings.duration, { my_tag: 'tag_sweet_js3' })
      check(response, { 'tag_sweet_js3': (r) => r.status === 200 }, { my_tag: "tag_sweet_js3" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/common.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_common_js3"
        }
      })
      common_js3.add(response.timings.duration, { my_tag: "tag_common_js3" })
      check(response, { 'tag_common_js3': (r) => r.status === 200 }, { my_tag: "tag_common_js3" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/constant.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_constant_js3"
        }
      })
      constant_js3.add(response.timings.duration, { my_tag: "tag_constant_js3" })
      check(response, { 'tag_constant_js3': (r) => r.status === 200 }, { my_tag: "tag_constant_js3" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/jquery.countdown.package-2.1.0/js/jquery.plugin.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_jquery_plugin_js1"
          }
        })
      jquery_plugin_js1.add(response.timings.duration, { my_tag: "tag_jquery_plugin_js1" })
      check(response, { 'tag_jquery_plugin_js1': (r) => r.status === 200 }, { my_tag: "tag_jquery_plugin_js1" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/jquery.countdown.package-2.1.0/js/jquery.countdown.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_jquery_countdown_js1"
          }
        })
      jquery_countdown_js1.add(response.timings.duration, { my_tag: "tag_jquery_countdown_js1" })
      check(response, { 'tag_jquery_countdown_js1': (r) => r.status === 200 }, { my_tag: "tag_jquery_countdown_js1" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/Applicant/SampleTest/SampleTest.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_sampleTest2"
          }
        })
      sampleTest2.add(response.timings.duration, { my_tag: "tag_sampleTest2" })
      check(response, { 'tag_sampleTest2': (r) => r.status === 200 }, { my_tag: "tag_sampleTest2" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/Applicant/SampleTest/SampleTestViewModel.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_sampleTestViewModel"
          }
        })
      sampleTestViewModel.add(response.timings.duration, { my_tag: "tag_sampleTestViewModel" })
      check(response, { 'tag_sampleTestViewModel': (r) => r.status === 200 }, { my_tag: "tag_sampleTestViewModel" });

      response = http.get('https://onlineteststg.astra.co.id/Images/AIStandard-Logo.gif', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tags: 'tag_aiStandard_logo3'
        }
      })
      aiStandard_logo3.add(response.timings.duration, { my_tag: 'tag_aiStandard_logo3' })
      check(response, { 'tag_aiStandard_logo3': (r) => r.status === 200 }, { my_tag: "tag_aiStandard_logo3" });

      response = http.get('https://onlineteststg.astra.co.id/Images/logosatu.png', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tags: 'tag_logosatu_png3'
        }
      })
      logosatu_png3.add(response.timings.duration, { my_tag: 'tag_logosatu_png3' })
      check(response, { 'tag_logosatu_png3': (r) => r.status === 200 }, { my_tag: "tag_logosatu_png3" });

      response = http.post('https://onlinetestapistg.astra.co.id/api/User/GetUserData', null, {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
          authorization: `Bearer ${user.AccessToken}`,
          clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
          'content-type': 'application/json',
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
        },
        tags: {
          my_tags: 'tag_getUserData3'
        }
      })
      getUserData3.add(response.timings.duration, { my_tag: 'tag_getUserData3' })
      check(response, { 'tag_getUserData3': (r) => r.status === 200 }, { my_tag: "tag_getUserData3" });

      response = http.options('https://onlinetestapistg.astra.co.id/api/User/GetUserData', null, {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'applicationcode,authorization,clienttag,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://onlineteststg.astra.co.id',
          'sec-fetch-mode': 'cors',
        },
        tags: {
          my_tags: 'tag_getUserData4'
        }
      })
      getUserData4.add(response.timings.duration, { my_tag: 'tag_getUserData4' })
      check(response, { 'tag_getUserData4': (r) => r.status === 200 }, { my_tag: "tag_getUserData4" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/StartTest',
        `{"ScheduleCode":${user.ScheduleCode}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tags: 'tag_startTest1'
          }
        })
      startTest1.add(response.timings.duration, { my_tag: 'tag_startTest1' })
      check(response, { 'tag_startTest1': (r) => r.status === 200 }, { my_tag: "tag_startTest1" });

      response = http.options('https://onlinetestapistg.astra.co.id/api/Question/StartTest', null, {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'applicationcode,authorization,clienttag,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://onlineteststg.astra.co.id',
          'sec-fetch-mode': 'cors',
        },
        tags: {
          my_tags: 'tag_startTest2'
        }
      })
      startTest2.add(response.timings.duration, { my_tag: 'tag_startTest2' })
      check(response, { 'tag_startTest2': (r) => r.status === 200 }, { my_tag: "tag_startTest2" });
      sleep(1)
    }
  )

  group(
    `page_4 - https://onlineteststg.astra.co.id/Views/Applicant/Question/Question.html?act=edit&ScheduleCode=${user.ScheduleCode}`,
    function () {
      response = http.get(
        `https://onlineteststg.astra.co.id/Views/Applicant/Question/Question.html?act=edit&ScheduleCode=${user.ScheduleCode}`,
        {
          headers: {
            dnt: '1',
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_SCH22037933",
          },
        }
      )
      SCH22037933.add(response.timings.duration, { my_tag: "tag_SCH22037933" });
      check(response, { 'tag_SCH22037933': (r) => r.status === 200 }, { my_tag: "tag_SCH22037933" });

      response = http.get('https://onlineteststg.astra.co.id/Content/Site.css', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_Site_css4",
        },
      })
      siteCss4.add(response.timings.duration, { my_tag: "tag_Site_css4" });
      check(response, { 'tag_Site_css4': (r) => r.status === 200 }, { my_tag: "tag_Site_css4" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Content/kendo/2014.1.423/kendo.common.min.css',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_common_min_css1",
          },
        }
      )
      kendo_common_min_css.add(response.timings.duration, { my_tag: "tag_kendo_common_min_css1" });
      check(response, { 'tag_kendo_common_min_css1': (r) => r.status === 200 }, { my_tag: "tag_kendo_common_min_css1" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Content/kendo/2014.1.423/kendo.bootstrap.min.css',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_bootstrap_min_css1",
          },
        }
      )
      kendo_bootstrap_min_css.add(response.timings.duration, { my_tag: "tag_kendo_bootstrap_min_css1" });
      check(response, { 'tag_kendo_bootstrap_min_css1': (r) => r.status === 200 }, { my_tag: "tag_kendo_bootstrap_min_css1" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/kendo/2014.1.423/jquery.min.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_jquery_min_js1",
          },
        }
      )
      jquery_min_js.add(response.timings.duration, { my_tag: "tag_jquery_min_js1" });
      check(response, { 'tag_jquery_min_js1': (r) => r.status === 200 }, { my_tag: "tag_jquery_min_js1" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/kendo/2014.1.423/kendo.web.min.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_web_min_js1",
          },
        }
      )
      kendo_web_min_js.add(response.timings.duration, { my_tag: "tag_kendo_web_min_js1" });
      check(response, { 'tag_kendo_web_min_js1': (r) => r.status === 200 }, { my_tag: "tag_kendo_web_min_js1" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/MessageBox.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_MessageBox_js",
        },
      })
      MessageBox_js.add(response.timings.duration, { my_tag: "tag_MessageBox_js" });
      check(response, { 'tag_MessageBox_js': (r) => r.status === 200 }, { my_tag: "tag_MessageBox_js" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/sweet.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_sweet_js10",
        },
      })
      sweet_js.add(response.timings.duration, { my_tag: "tag_sweet_js10" });
      check(response, { 'tag_sweet_js10': (r) => r.status === 200 }, { my_tag: "tag_sweet_js10" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/common.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_common_js10",
        },
      })
      common_js.add(response.timings.duration, { my_tag: "tag_common_js10" });
      check(response, { 'tag_common_js10': (r) => r.status === 200 }, { my_tag: "tag_common_js10" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/constant.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_constant_js10",
        },
      })
      constant_js.add(response.timings.duration, { my_tag: "tag_constant_js10" });
      check(response, { 'tag_constant_js10': (r) => r.status === 200 }, { my_tag: "tag_constant_js10" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/jquery.countdown.package-2.1.0/js/jquery.plugin.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_jquery_plugin_js2",
          },
        }
      )
      jquery_plugin_js2.add(response.timings.duration, { my_tag: "tag_jquery_plugin_js2" });
      check(response, { 'tag_jquery_plugin_js2': (r) => r.status === 200 }, { my_tag: "tag_jquery_plugin_js2" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/jquery.countdown.package-2.1.0/js/jquery.countdown.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_jquery_countdown_js2",
          }
        }
      )
      jquery_countdown_js2.add(response.timings.duration, { my_tag: "tag_jquery_countdown_js2" });
      check(response, { 'tag_jquery_countdown_js2': (r) => r.status === 200 }, { my_tag: "tag_jquery_countdown_js2" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/Applicant/Question/Question.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_Question_js",
          }
        }
      )
      Question_js.add(response.timings.duration, { my_tag: "tag_Question_js" });
      check(response, { 'tag_Question_js': (r) => r.status === 200 }, { my_tag: "tag_Question_js" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/Applicant/Question/QuestionViewModel.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_QuestionViewModel_js",
          }
        }
      )
      QuestionViewModel_js.add(response.timings.duration, { my_tag: "tag_QuestionViewModel_js" });
      check(response, { 'tag_QuestionViewModel_js': (r) => r.status === 200 }, { my_tag: "tag_QuestionViewModel_js" });

      response = http.get('https://onlineteststg.astra.co.id/Images/AIStandard-Logo.gif', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_AIStandard_Logo_gif",
        }
      })
      AIStandard_Logo_gif.add(response.timings.duration, { my_tag: "tag_AIStandard_Logo_gif" });
      check(response, { 'tag_AIStandard_Logo_gif': (r) => r.status === 200 }, { my_tag: "tag_AIStandard_Logo_gif" });

      response = http.get('https://onlineteststg.astra.co.id/Images/logosatu.png', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_logosatu_png10",
        }
      })
      logosatu_png.add(response.timings.duration, { my_tag: "tag_logosatu_png10" });
      check(response, { 'tag_logosatu_png10': (r) => r.status === 200 }, { my_tag: "tag_logosatu_png10" });

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/Get',
        `{"ScheduleCode":${user.ScheduleCode}}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_Question_Get1",
          }
        }
      )
      Question_Get.add(response.timings.duration, { my_tag: "tag_Question_Get1" });
      check(response, { 'tag_Question_Get1': (r) => r.status === 200 }, { my_tag: "tag_Question_Get1" });

      response = http.options('https://onlinetestapistg.astra.co.id/api/Question/Get', null, {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'applicationcode,authorization,clienttag,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://onlineteststg.astra.co.id',
          'sec-fetch-mode': 'cors',
        },
        tags: {
          my_tag: "tag_Question_Get2",
        }
      })
      Question_Get2.add(response.timings.duration, { my_tag: "tag_Question_Get2" });
      check(response, { 'tag_Question_Get2': (r) => r.status === 200 }, { my_tag: "tag_Question_Get2" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPG22000001","SubtestCode":"ST22000003","Answer":"2"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_pg1",
          }
        }
      )
      SubmitPerSoal_pg1.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_pg1" });
      check(response, { 'tag_SubmitPerSoal_pg1': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_pg1" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_1",
          }
        }
      )
      SubmitPerSoal_1.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_1" });
      check(response, { 'tag_SubmitPerSoal_1': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_1" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPG22000002","SubtestCode":"ST22000003","Answer":"1"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_pg2",
          }
        }
      )
      SubmitPerSoal_pg2.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_pg2" });
      check(response, { 'tag_SubmitPerSoal_pg2': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_pg2" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_2",
          }
        }
      )
      SubmitPerSoal_2.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_2" });
      check(response, { 'tag_SubmitPerSoal_2': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_2" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPG22000003","SubtestCode":"ST22000003","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_pg3",
          }
        }
      )
      SubmitPerSoal_pg3.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_pg3" });
      check(response, { 'tag_SubmitPerSoal_pg3': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_pg3" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPG22000004","SubtestCode":"ST22000003","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_pg4",
          }
        }
      )
      SubmitPerSoal_pg4.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_pg4" });
      check(response, { 'tag_SubmitPerSoal_pg4': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_pg4" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPG22000005","SubtestCode":"ST22000003","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_pg5",
          }
        }
      )
      SubmitPerSoal_pg5.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_pg5" });
      check(response, { 'tag_SubmitPerSoal_pg5': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_pg5" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPG22000006","SubtestCode":"ST22000003","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_pg6",
          }
        }
      )
      SubmitPerSoal_pg6.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_pg6" });
      check(response, { 'tag_SubmitPerSoal_pg6': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_pg6" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPG22000007","SubtestCode":"ST22000003","Answer":"2"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_pg7",
          }
        }
      )
      SubmitPerSoal_pg7.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_pg7" });
      check(response, { 'tag_SubmitPerSoal_pg7': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_pg7" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_3",
          }
        }
      )
      SubmitPerSoal_3.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_3" });
      check(response, { 'tag_SubmitPerSoal_3': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_3" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPG22000008","SubtestCode":"ST22000003","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_pg8",
          }
        }
      )
      SubmitPerSoal_pg8.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_pg8" });
      check(response, { 'tag_SubmitPerSoal_pg8': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_pg8" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPG22000009","SubtestCode":"ST22000003","Answer":"2"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_pg9",
          }
        }
      )
      SubmitPerSoal_pg9.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_pg9" });
      check(response, { 'tag_SubmitPerSoal_pg9': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_pg9" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPG22000010","SubtestCode":"ST22000003","Answer":"2"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_SubmitPerSoal_pg10",
          }
        }
      )
      SubmitPerSoal_pg10.add(response.timings.duration, { my_tag: "tag_SubmitPerSoal_pg10" });
      check(response, { 'tag_SubmitPerSoal_pg10': (r) => r.status === 200 }, { my_tag: "tag_SubmitPerSoal_pg10" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal1",
          },
        })
      submitPerSoal.add(response.timings.duration, { my_tag: "tag_submit_per_soal1" });
      check(response, { 'tag_submit_per_soal1': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal1" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal2",
          },
        })
      submitPerSoal2.add(response.timings.duration, { my_tag: "tag_submit_per_soal2" });
      check(response, { 'tag_submit_per_soal2': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal2" });
      sleep(8)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPWM22000001","SubtestCode":"ST22000004","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_wm1",
          },
        })
      submitPerSoalWm1.add(response.timings.duration, { my_tag: "tag_submit_per_soal_wm1" });
      check(response, { 'tag_submit_per_soal_wm1': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_wm1" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal3",
          },
        })
      submitPerSoal3.add(response.timings.duration, { my_tag: "tag_submit_per_soal3" });
      check(response, { 'tag_submit_per_soal3': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal3" });
      sleep(8)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPWM22000002","SubtestCode":"ST22000004","Answer":"1"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_wm2",
          },
        })
      submitPerSoalWm2.add(response.timings.duration, { my_tag: "tag_submit_per_soal_wm2" });
      check(response, { 'tag_submit_per_soal_wm2': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_wm2" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal4",
          },
        })
      submitPerSoal4.add(response.timings.duration, { my_tag: "tag_submit_per_soal4" });
      check(response, { 'tag_submit_per_soal4': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal4" });
      sleep(8)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal5",
          },
        })
      submitPerSoal5.add(response.timings.duration, { my_tag: "tag_submit_per_soal5" });
      check(response, { 'tag_submit_per_soal5': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal5" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPWM22000003","SubtestCode":"ST22000004","Answer":"2"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_wm3",

          },
        })
      submitPerSoalWm3.add(response.timings.duration, { my_tag: "tag_submit_per_soal_wm3" });
      check(response, { 'tag_submit_per_soal_wm3': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_wm3" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal6",
          },
        })
      submitPerSoal6.add(response.timings.duration, { my_tag: "tag_submit_per_soal6" });
      check(response, { 'tag_submit_per_soal6': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal6" });
      sleep(8)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal7",
          },
        })
      submitPerSoal7.add(response.timings.duration, { my_tag: "tag_submit_per_soal7" });
      check(response, { 'tag_submit_per_soal7': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal7" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal8",
          },
        })
      submitPerSoal8.add(response.timings.duration, { my_tag: "tag_submit_per_soal8" });
      check(response, { 'tag_submit_per_soal8': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal8" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPWM22000004","SubtestCode":"ST22000004","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_wm4",
          },
        })
      submitPerSoalWm4.add(response.timings.duration, { my_tag: "tag_submit_per_soal_wm4" });
      check(response, { 'tag_submit_per_soal_wm4': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_wm4" });
      sleep(8)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPWM22000005","SubtestCode":"ST22000004","Answer":"2"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_wm5",
          },
        })
      submitPerSoalWm5.add(response.timings.duration, { my_tag: "tag_submit_per_soal_wm5" });
      check(response, { 'tag_submit_per_soal_wm5': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_wm5" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal9",
          },
        })
      submitPerSoal9.add(response.timings.duration, { my_tag: "tag_submit_per_soal9" });
      check(response, { 'tag_submit_per_soal9': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal9" });
      sleep(8)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal10",
          },
        })
      submitPerSoal10.add(response.timings.duration, { my_tag: "tag_submit_per_soal10" });
      check(response, { 'tag_submit_per_soal10': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal10" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPWM22000006","SubtestCode":"ST22000004","Answer":"1"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_wm6",
          },
        })
      submitPerSoalWm6.add(response.timings.duration, { my_tag: "tag_submit_per_soal_wm6" });
      check(response, { 'tag_submit_per_soal_wm6': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_wm6" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal11",
          },
        })
      submitPerSoal11.add(response.timings.duration, { my_tag: "tag_submit_per_soal11" });
      check(response, { 'tag_submit_per_soal11': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal11" });
      sleep(8)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal12",
          },
        })
      submitPerSoal12.add(response.timings.duration, { my_tag: "tag_submit_per_soal12" });
      check(response, { 'tag_submit_per_soal12': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal12" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal13",
          },
        })
      submitPerSoal13.add(response.timings.duration, { my_tag: "tag_submit_per_soal13" });
      check(response, { 'tag_submit_per_soal13': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal13" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPWM22000007","SubtestCode":"ST22000004","Answer":"2"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_wm7",
          },
        })
      submitPerSoalWm7.add(response.timings.duration, { my_tag: "tag_submit_per_soal_wm7" });
      check(response, { 'tag_submit_per_soal_wm7': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_wm7" });
      sleep(8)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPWM22000008","SubtestCode":"ST22000004","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_wm8",
          },
        })
      submitPerSoalWm8.add(response.timings.duration, { my_tag: "tag_submit_per_soal_wm8" });
      check(response, { 'tag_submit_per_soal_wm8': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_wm8" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal14",
          },
        })
      submitPerSoal14.add(response.timings.duration, { my_tag: "tag_submit_per_soal14" });
      check(response, { 'tag_submit_per_soal14': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal14" });
      sleep(8)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal15",
          },
        })
      submitPerSoal15.add(response.timings.duration, { my_tag: "tag_submit_per_soal15" });
      check(response, { 'tag_submit_per_soal15': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal15" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal16",
          },
        })
      submitPerSoal16.add(response.timings.duration, { my_tag: "tag_submit_per_soal16" });
      check(response, { 'tag_submit_per_soal16': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal16" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPWM22000009","SubtestCode":"ST22000004","Answer":"2"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_wm9",
          },
        })
      submitPerSoalWm9.add(response.timings.duration, { my_tag: "tag_submit_per_soal_wm9" });
      check(response, { 'tag_submit_per_soal_wm9': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_wm9" });
      sleep(8)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPWM22000010","SubtestCode":"ST22000004","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_wm10",
          },
        })
      submitPerSoalWm10.add(response.timings.duration, { my_tag: "tag_submit_per_soal_wm10" });
      check(response, { 'tag_submit_per_soal_wm10': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_wm10" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal17",
          },
        })
      submitPerSoal17.add(response.timings.duration, { my_tag: "tag_submit_per_soal17" });
      check(response, { 'tag_submit_per_soal17': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal17" });
      sleep(8)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPVM22000001","SubtestCode":"ST22000005","Answer":"2"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_vm1",
          },
        })
      submitPerSoalVm1.add(response.timings.duration, { my_tag: "tag_submit_per_soal_vm1" });
      check(response, { 'tag_submit_per_soal_vm1': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_vm1" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal18",
          },
        })
      submitPerSoal18.add(response.timings.duration, { my_tag: "tag_submit_per_soal18" });
      check(response, { 'tag_submit_per_soal18': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal18" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal19",
          },
        })
      submitPerSoal19.add(response.timings.duration, { my_tag: "tag_submit_per_soal19" });
      check(response, { 'tag_submit_per_soal19': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal19" });

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPVM22000002","SubtestCode":"ST22000005","Answer":"2"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_vm2",
          },
        })
      submitPerSoalVm2.add(response.timings.duration, { my_tag: "tag_submit_per_soal_vm2" });
      check(response, { 'tag_submit_per_soal_vm2': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_vm2" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPVM22000003","SubtestCode":"ST22000005","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_vm3",
          },
        })
      submitPerSoalVm3.add(response.timings.duration, { my_tag: "tag_submit_per_soal_vm3" });
      check(response, { 'tag_submit_per_soal_vm3': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_vm3" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPVM22000004","SubtestCode":"ST22000005","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_vm4",
          },
        })
      submitPerSoalVm4.add(response.timings.duration, { my_tag: "tag_submit_per_soal_vm4" });
      check(response, { 'tag_submit_per_soal_vm4': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_vm4" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPVM22000005","SubtestCode":"ST22000005","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_vm5",
          },
        })
      submitPerSoalVm5.add(response.timings.duration, { my_tag: "tag_submit_per_soal_vm5" });
      check(response, { 'tag_submit_per_soal_vm5': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_vm5" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPVM22000006","SubtestCode":"ST22000005","Answer":"2"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_vm6",
          },
        })
      submitPerSoalVm6.add(response.timings.duration, { my_tag: "tag_submit_per_soal_vm6" });
      check(response, { 'tag_submit_per_soal_vm6': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_vm6" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPVM22000007","SubtestCode":"ST22000005","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_vm7",
          },
        })
      submitPerSoalVm7.add(response.timings.duration, { my_tag: "tag_submit_per_soal_vm7" });
      check(response, { 'tag_submit_per_soal_vm7': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_vm7" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal20",
          },
        })
      submitPerSoal20.add(response.timings.duration, { my_tag: "tag_submit_per_soal20" });
      check(response, { 'tag_submit_per_soal20': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal20" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPVM22000008","SubtestCode":"ST22000005","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_vm8",
          },
        })
      submitPerSoalVm8.add(response.timings.duration, { my_tag: "tag_submit_per_soal_vm8" });
      check(response, { 'tag_submit_per_soal_vm8': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_vm8" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPVM22000009","SubtestCode":"ST22000005","Answer":"2"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_vm9",
          },
        })
      submitPerSoalVm9.add(response.timings.duration, { my_tag: "tag_submit_per_soal_vm9" });
      check(response, { 'tag_submit_per_soal_vm9': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_vm9" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPVM22000010","SubtestCode":"ST22000005","Answer":"3"}],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal_vm10",

          },
        })
      submitPerSoalVm10.add(response.timings.duration, { my_tag: "tag_submit_per_soal_vm10" });
      check(response, { 'tag_submit_per_soal_vm10': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal_vm10" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/Submit',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[{"QuestionCode":"QNAKPG22000001","SubTestCode":"ST22000003","Answer":"2"},{"QuestionCode":"QNAKPG22000002","SubTestCode":"ST22000003","Answer":"1"},{"QuestionCode":"QNAKPG22000003","SubTestCode":"ST22000003","Answer":"3"},{"QuestionCode":"QNAKPG22000004","SubTestCode":"ST22000003","Answer":"3"},{"QuestionCode":"QNAKPG22000005","SubTestCode":"ST22000003","Answer":"3"},{"QuestionCode":"QNAKPG22000006","SubTestCode":"ST22000003","Answer":"3"},{"QuestionCode":"QNAKPG22000007","SubTestCode":"ST22000003","Answer":"2"},{"QuestionCode":"QNAKPG22000008","SubTestCode":"ST22000003","Answer":"3"},{"QuestionCode":"QNAKPG22000009","SubTestCode":"ST22000003","Answer":"2"},{"QuestionCode":"QNAKPG22000010","SubTestCode":"ST22000003","Answer":"2"},{"QuestionCode":"QNAKPWM22000001","SubTestCode":"ST22000004","Answer":"3"},{"QuestionCode":"QNAKPWM22000002","SubTestCode":"ST22000004","Answer":"1"},{"QuestionCode":"QNAKPWM22000003","SubTestCode":"ST22000004","Answer":"2"},{"QuestionCode":"QNAKPWM22000004","SubTestCode":"ST22000004","Answer":"3"},{"QuestionCode":"QNAKPWM22000005","SubTestCode":"ST22000004","Answer":"2"},{"QuestionCode":"QNAKPWM22000006","SubTestCode":"ST22000004","Answer":"1"},{"QuestionCode":"QNAKPWM22000007","SubTestCode":"ST22000004","Answer":"2"},{"QuestionCode":"QNAKPWM22000008","SubTestCode":"ST22000004","Answer":"3"},{"QuestionCode":"QNAKPWM22000009","SubTestCode":"ST22000004","Answer":"2"},{"QuestionCode":"QNAKPWM22000010","SubTestCode":"ST22000004","Answer":"3"},{"QuestionCode":"QNAKPVM22000001","SubTestCode":"ST22000005","Answer":"2"},{"QuestionCode":"QNAKPVM22000002","SubTestCode":"ST22000005","Answer":"2"},{"QuestionCode":"QNAKPVM22000003","SubTestCode":"ST22000005","Answer":"3"},{"QuestionCode":"QNAKPVM22000004","SubTestCode":"ST22000005","Answer":"3"},{"QuestionCode":"QNAKPVM22000005","SubTestCode":"ST22000005","Answer":"3"},{"QuestionCode":"QNAKPVM22000006","SubTestCode":"ST22000005","Answer":"2"},{"QuestionCode":"QNAKPVM22000007","SubTestCode":"ST22000005","Answer":"3"},{"QuestionCode":"QNAKPVM22000008","SubTestCode":"ST22000005","Answer":"3"},{"QuestionCode":"QNAKPVM22000009","SubTestCode":"ST22000005","Answer":"2"},{"QuestionCode":"QNAKPVM22000010","SubTestCode":"ST22000005","Answer":"3"}]}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_all_soal1",
          },
        })
      submitAllSoal1.add(response.timings.duration, { my_tag: "tag_submit_all_soal1" });
      check(response, { 'tag_submit_all_soal1': (r) => r.status === 200 }, { my_tag: "tag_submit_all_soal1" });

      response = http.options('https://onlinetestapistg.astra.co.id/api/Question/Submit', null, {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'applicationcode,authorization,clienttag,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://onlineteststg.astra.co.id',
          'sec-fetch-mode': 'cors',
        },
        tags: {
          my_tag: "tag_submit_all_soal2",
        },
      })
      submitAllSoal2.add(response.timings.duration, { my_tag: "tag_submit_all_soal2" });
      check(response, { 'tag_submit_all_soal2': (r) => r.status === 200 }, { my_tag: "tag_submit_all_soal2" });
      sleep(1)

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        `{"ScheduleCode":${user.ScheduleCode},"SubmitList":[],"RemainingTime":0}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            authorization: `Bearer ${user.AccessToken}`,
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_submit_per_soal21",
          },
        })
      submitPerSoal21.add(response.timings.duration, { my_tag: "tag_submit_per_soal21" });
      check(response, { 'tag_submit_per_soal21': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal21" });

      response = http.options(
        'https://onlinetestapistg.astra.co.id/api/Question/SubmitPerSoal',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'applicationcode,authorization,clienttag,content-type',
            'access-control-request-method': 'POST',
            origin: 'https://onlineteststg.astra.co.id',
            'sec-fetch-mode': 'cors',
          },
          tags: {
            my_tag: "tag_submit_per_soal22",
          },
        })
      submitPerSoal22.add(response.timings.duration, { my_tag: "tag_submit_per_soal22" });
      check(response, { 'tag_submit_per_soal22': (r) => r.status === 200 }, { my_tag: "tag_submit_per_soal22" });
    }
  )

  group(
    'page_5 - https://onlineteststg.astra.co.id/Views/Applicant/PageThankyou/Done.html',
    function () {
      response = http.get(
        'https://onlineteststg.astra.co.id/Views/Applicant/PageThankyou/Done.html',
        {
          headers: {
            dnt: '1',
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_page_thankyou",
          },
        })
      pageThankYou.add(response.timings.duration, { my_tag: "tag_page_thankyou" });
      check(response, { 'tag_page_thankyou': (r) => r.status === 200 }, { my_tag: "tag_page_thankyou" });

      response = http.get('https://onlineteststg.astra.co.id/Content/Site.css', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_Site_css5",
        },
      })
      siteCss5.add(response.timings.duration, { my_tag: "tag_Site_css5" });
      check(response, { 'tag_Site_css5': (r) => r.status === 200 }, { my_tag: "tag_Site_css5" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Content/kendo/2014.1.423/kendo.common.min.css',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_common_min_css2",
          },
        })
      kendoCommonMinCss.add(response.timings.duration, { my_tag: "tag_kendo_common_min_css2" });
      check(response, { 'tag_kendo_common_min_css2': (r) => r.status === 200 }, { my_tag: "tag_kendo_common_min_css2" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Content/kendo/2014.1.423/kendo.bootstrap.min.css',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_bootstrap_min_css2",
          },
        })
      kendoBootstrapMinCss.add(response.timings.duration, { my_tag: "tag_kendo_bootstrap_min_css2" });
      check(response, { 'tag_kendo_bootstrap_min_css2': (r) => r.status === 200 }, { my_tag: "tag_kendo_bootstrap_min_css2" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/kendo/2014.1.423/jquery.min.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_jquery_min_js2",
          },
        })
      jqueryMinJs.add(response.timings.duration, { my_tag: "tag_jquery_min_js2" });
      check(response, { 'tag_jquery_min_js2': (r) => r.status === 200 }, { my_tag: "tag_jquery_min_js2" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/kendo/2014.1.423/kendo.web.min.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_kendo_web_min_js2",
          },
        })
      kendoWebMinJs.add(response.timings.duration, { my_tag: "tag_kendo_web_min_js2" });
      check(response, { 'tag_kendo_web_min_js2': (r) => r.status === 200 }, { my_tag: "tag_kendo_web_min_js2" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/MessageBox.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_message_box_js",
        },
      })
      messageBoxJs.add(response.timings.duration, { my_tag: "tag_message_box_js" });
      check(response, { 'tag_message_box_js': (r) => r.status === 200 }, { my_tag: "tag_message_box_js" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/sweet.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_sweet_js11",
        },
      })
      sweetJs.add(response.timings.duration, { my_tag: "tag_sweet_js11" });
      check(response, { 'tag_sweet_js11': (r) => r.status === 200 }, { my_tag: "tag_sweet_js11" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/common.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_common_js11",
        },
      })
      commonJs.add(response.timings.duration, { my_tag: "tag_common_js11" });
      check(response, { 'tag_common_js11': (r) => r.status === 200 }, { my_tag: "tag_common_js11" });

      response = http.get('https://onlineteststg.astra.co.id/Scripts/Common/constant.js', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_constant_js11",
        },
      })
      constantJs.add(response.timings.duration, { my_tag: "tag_constant_js11" });
      check(response, { 'tag_constant_js11': (r) => r.status === 200 }, { my_tag: "tag_constant_js11" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/Applicant/PageThankyou/Done.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_done_js",
          },
        })
      doneJs.add(response.timings.duration, { my_tag: "tag_done_js" });
      check(response, { 'tag_done_js': (r) => r.status === 200 }, { my_tag: "tag_done_js" });

      response = http.get(
        'https://onlineteststg.astra.co.id/Scripts/Applicant/PageThankyou/DoneViewModel.js',
        {
          headers: {
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
          tags: {
            my_tag: "tag_done_view_model_js",
          },
        })
      doneViewModelJs.add(response.timings.duration, { my_tag: "tag_done_view_model_js" });
      check(response, { 'tag_done_view_model_js': (r) => r.status === 200 }, { my_tag: "tag_done_view_model_js" });

      response = http.get('https://onlineteststg.astra.co.id/Images/AIStandard-Logo.gif', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_ai_standard_logo_gif",
        },
      })
      aiStandardLogoGif.add(response.timings.duration, { my_tag: "tag_ai_standard_logo_gif" });
      check(response, { 'tag_ai_standard_logo_gif': (r) => r.status === 200 }, { my_tag: "tag_ai_standard_logo_gif" });

      response = http.get('https://onlineteststg.astra.co.id/Images/logosatu.png', {
        headers: {
          dnt: '1',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: {
          my_tag: "tag_logo_satu_png",
        },
      })
      logoSatuPng.add(response.timings.duration, { my_tag: "tag_logo_satu_png" });
      check(response, { 'tag_logo_satu_png': (r) => r.status === 200 }, { my_tag: "tag_logo_satu_png" });

      response = http.post(
        'https://onlinetestapistg.astra.co.id/api/User/GetCompany',
        `{"q":"${user.q}"}`,
        {
          headers: {
            accept: 'application/json, text/javascript, */*; q=0.01',
            applicationcode: '41D69A9A-86D8-4C00-842B-B04053030FCE',
            clienttag: 'FA7F2DCF-3FA6-469B-AA96-5FBD75C16339',
            'content-type': 'application/json',
            dnt: '1',
            'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
          },
          tags: {
            my_tag: "tag_get_company3",
          },
        })
      getCompany3.add(response.timings.duration, { my_tag: "tag_get_company3" });
      check(response, { 'tag_get_company3': (r) => r.status === 200 }, { my_tag: "tag_get_company3" });

      response = http.options('https://onlinetestapistg.astra.co.id/api/User/GetCompany', null, {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'applicationcode,clienttag,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://onlineteststg.astra.co.id',
          'sec-fetch-mode': 'cors',
        },
        tags: {
          my_tag: "tag_get_company4",
        },
      })
      getCompany4.add(response.timings.duration, { my_tag: "tag_get_company4" });
      check(response, { 'tag_get_company4': (r) => r.status === 200 }, { my_tag: "tag_get_company4" });
      sleep(1)
    }
  )
}