/**
 * Created by ganl on 2017/2/14 0014.
 */

(function (_) {
    _.translations["zh-TW"] = {
        missMessage: "defaultValue for missing",
        hello: "妳好, {{:name}} ",
        helloParam: "第壹個參數{{:first}}, 第二個參數{{:second}}.",
        helloObj: {
            test: "just a example"
        },
        license: {
            sw_license_cc_hwcode: "該控制機識別碼", // SW_LICENSE_CC_HWCODE
            wiz_license_notice: "請將該識別碼發給您的銷售代表，以獲取正式的軟件註冊碼。" // WIZ_LICENSE_NOTICE
        },
        sms: {
            must_be_number:" 请输入正确的中国手机号",
            sms_app_key:" 请输入App Key",
            sms_secret_key:" 请输入Secret Key",
            sms_sign_name:" 请输入短信签名",
            sms_template_code:" 请输入短信模板ID",
            sms_notify_phone:" 请输入接收通知的手机",
            dtu_serial_device:" 请输入串口",
            dtu_baud_rate:" 请输入波特率",
            dtu_baud_rate_invalid:" 输入的波特率不正预期的范围内"
        },
        monitor: {
            must_be_number:" 请输入大于0小于92整数",
            overall_interval:"请输入通知间隔,并且必须是数字",
            inspection_interval:"请输入巡检提醒间隔"
        },
        op_item: {
            select_one: '请选中要操作的项'
        },
        del_item: {
            select_one: '请选择要删除的项',
            del_confirm: '您确定要删除吗?',
            del_failed: '删除失败，原因：',
            del_success: '删除成功'
        },
        group:{
            del_group_in_use: '要删除的组别正在使用中'
        },
        exit: {
            exit_confirm: '您确定要退出吗?'
        },
        msg: {
            btn_cancel: '取消'
        },
        database_operation_fail: '数据库操作失败!',
        SSS: {
            'SSS_BACKUPING' : '已备份',
            'SSS_COMPARE' : '比較中',
            'SSS_COMPLETED' : '已完成',
            'SSS_CREATE_VM' : '创建虚机中',
            'SSS_DEAD' : '异常',
            'SSS_ERRTKN' : '密码错误',
            'SSS_EXCEPTION' : '異常',
            'SSS_EXECUTING' : '执行中',
            'SSS_FAILED' : '异常',
            'SSS_FFO_STATUS_BOOTFAIL' : '備機重啟失敗',
            'SSS_FFO_STATUS_BOOTING' : '正在重啟...',
            'SSS_FFO_STATUS_DONE' : '重啟就緒',
            'SSS_FFO_STATUS_IDLE' : '遷移就緒',
            'SSS_FFO_STATUS_PREPARE' : '遷移準備',
            'SSS_FFO_STATUS_STOP' : '恢復失敗',
            'SSS_FFO_STATUS_REBOOTED' : '遷移完成',
            'SSS_FFO_STATUS_RUNNING' : '遷移中...',
            'SSS_FFO_STATUS_RUN_ODD' : '異常',
            'SSS_FFO_STATUS_UNKNOWN' : '未知',
            'SSS_FSP_STATUS_COMPLETED' : '备份完成',
            'SSS_FSP_STATUS_IDLE' : '备份就绪',
            'SSS_FSP_STATUS_RC_IDLE' : '還原就緒',
            'SSS_FSP_STATUS_REBOOTED' : '還原完成',
            'SSS_FSP_STATUS_PREPARE' : '备份中…',
            'SSS_FSP_STATUS_WAIT' : '等待',
            'SSS_HA_ROLE_MASTER' : '主节点',
            'SSS_HA_ROLE_POSTBACK' : '切换',
            'SSS_HA_ROLE_POSTOVER' : '切换',
            'SSS_HA_ROLE_PREBACK' : '切换',
            'SSS_HA_ROLE_PREOVER' : '切换',
            'SSS_HA_ROLE_SLAVE' : '从节点',
            'SSS_HA_ROLE_UNJOIN' : '未加入',
            'SSS_HA_STATUS_FAIL' : '失败',
            'SSS_HA_STATUS_MIRR' : '镜像',
            'SSS_HA_STATUS_READY' : '就绪',
            'SSS_HA_STATUS_RUN' : '运行',
            'SSS_HA_STATUS_START' : '准备',
            'SSS_HA_STATUS_WARN' : '警告',
            'SSS_IDLE' : '空闲',
            'SSS_INPUT_KEYWORD' : '請輸入關鍵字',
            'SSS_LOADING' : '正在處理中，請稍等...',
            'SSS_LOADING_TITLE' : '處理中',
            'SSS_MIRROR' : '鏡像中',
            'SSS_OFFLINE' : '離線',
            'SSS_ONLINE' : '在線',
            'SSS_PREPARATION' : '準備中...',
            'SSS_RECOVERY' : '已恢復',
            'SSS_CDPMERGE' : 'CDP处理中...',
            'SSS_REPLICATION' : '複製監控中',
            'SSS_STALE' : '失效',
            'SSS_STOP' : '停止',
            'SSS_SWITCH' : '切換',
            'SSS_UNKNOW' : '未知',
            'SSS_USED' : '已用',
            'SSS_VP_CBT' : '查询变化数据',
            'SSS_VP_CFG' : '备份虚机配置',
            'SSS_VP_CHECK' : '检查数据',
            'SSS_VP_PREPARE' : '备份准备',
            'SSS_VP_START' : '启动',
            'SSS_START_TOO_LATE' : '開始時間不能晚於結束時間！',
            'SSS_INPUT_END' : '請輸入查詢結束時間',
            'SSS_INPUT_START' : '請輸入查詢開始時間',
            'SSS_HA_STATUS_UNSYNC' : '数据未同步',
            'SSS_MOVE' : '已迁移',
            'SSS_VP_MOVE':'迁移就绪',
            'SSS_VP_RESUSE' : '保存數據中',
            'SSS_VP_PEND' : '挂起狀態',
            'SSS_VP_RUN':'运行',
            'SSS_NAS_NEGO' : '协商',
            'SSS_NAS_RUN' : '运行',
            'SSS_NAS_NET_BREAK' : '网络中断',
            'SSS_CLS_OFFLINE' : '警告',
            'SSS_CLS_ONLINE' : '正常'
        },
        end: "" // 结束符号，没有意义
    }
})(I18n);