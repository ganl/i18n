/**
 * Created by ganl on 2017/2/14 0014.
 */

(function (_) {
    _.translations["en"] = {
        missMessage: "defaultValue for missing",
        hello: "Hello, {{:name}} ",
        helloParam: " first param: {{:first}},second param: {{:second}}.",
        helloObj: {
            test: "just a example"
        },
        license: {
            sw_license_cc_hwcode: "The control center identification code", // SW_LICENSE_CC_HWCODE
            wiz_license_notice: "Please send the identification code to your sales representative to obtain a Offical version software license code." // WIZ_LICENSE_NOTICE
        },
        sms: {
            must_be_number:" Please enter the correct phone number.",
            sms_app_key:" Please enter App Key.",
            sms_secret_key:" Please enter Secret Key.",
            sms_sign_name:" Please enter SMS sign name.",
            sms_template_code:" Please enter SMS template code.",
            sms_notify_phone:" Please enter phone number to receive notifications.",
            dtu_serial_device:" Please enter the serial port",
            dtu_baud_rate:" Please enter the baud rate",
            dtu_baud_rate_invalid:" The baud rate entered is not within the expected range"
        },
        monitor: {
            must_be_number:" Please enter more than 0 and less than 92",
            overall_interval:"Please enter the notification interval and must be a number",
            inspection_interval:"Please enter patrol reminder interval"
        },
        op_item: {
            select_one: 'Please select the item to be operated'
        },
        del_item: {
            select_one: 'Select the items you want to delete',
            del_confirm: 'Are you sure you want to delete it?',
            del_failed: 'Delete failed:',
            del_success: 'Delete success'
        },
        group:{
          del_group_in_use: 'The group to be deleted is in use'
        },
        exit: {
          exit_confirm: 'Are you sure you want to logout'
        },
        msg: {
            btn_cancel: 'Cancel'
        },
        database_operation_fail: 'Database operation is failed!',
        SSS: {
            'SSS_BACKUPING' : 'Backuping',
            'SSS_COMPARE' : 'Comparing',
            'SSS_COMPLETED' : 'Finished',
            'SSS_CREATE_VM' : 'creating virtual machine',
            'SSS_DEAD' : 'abnormal',
            'SSS_ERRTKN' : 'passwd err',
            'SSS_EXCEPTION' : 'Exception',
            'SSS_EXECUTING' : 'excuting',
            'SSS_FAILED' : 'abnormal',
            'SSS_FFO_STATUS_BOOTFAIL' : 'Reboot failed',
            'SSS_FFO_STATUS_BOOTING' : 'Rebooting',
            'SSS_FFO_STATUS_DONE' : 'Reboot ready',
            'SSS_FFO_STATUS_IDLE' : 'Move ready',
            'SSS_FFO_STATUS_PREPARE' : 'Preparing',
            'SSS_FFO_STATUS_REBOOTED' : 'Finished',
            'SSS_FFO_STATUS_RUNNING' : 'Moving',
            'SSS_FFO_STATUS_RUN_ODD' : 'Exception',
            'SSS_FFO_STATUS_UNKNOWN' : 'Unknown',
            'SSS_FSP_STATUS_COMPLETED' : 'Complete',
            'SSS_FFO_STATUS_STOP' : 'Recover failed',
            'SSS_FSP_STATUS_IDLE' : 'Move is ready',
            'SSS_FSP_STATUS_RC_IDLE' : 'Recover ready',
            'SSS_FSP_STATUS_REBOOTED' : 'Recover finished',
            'SSS_FSP_STATUS_PREPARE' : 'backup…',
            'SSS_FSP_STATUS_WAIT' : 'waiting',
            'SSS_HA_ROLE_MASTER' : 'Primary Node',
            'SSS_HA_ROLE_POSTBACK' : 'Switch',
            'SSS_HA_ROLE_POSTOVER' : 'Switch',
            'SSS_HA_ROLE_PREBACK' : 'Switch',
            'SSS_HA_ROLE_PREOVER' : 'Switch',
            'SSS_HA_ROLE_SLAVE' : 'Slave Node',
            'SSS_HA_ROLE_UNJOIN' : 'UnJoin',
            'SSS_HA_STATUS_FAIL' : 'Failed',
            'SSS_HA_STATUS_MIRR' : 'Mirror',
            'SSS_HA_STATUS_READY' : 'Ready',
            'SSS_HA_STATUS_RUN' : 'Running',
            'SSS_HA_STATUS_START' : 'Prepare',
            'SSS_HA_STATUS_WARN' : 'Warning',
            'SSS_IDLE' : 'idle',
            'SSS_INPUT_KEYWORD' : 'Please Input a Keyword',
            'SSS_LOADING' : 'Processing, please wait...',
            'SSS_LOADING_TITLE' : 'Loading',
            'SSS_MIRROR' : 'Mirroring',
            'SSS_OFFLINE' : 'Offline',
            'SSS_ONLINE' : 'Online',
            'SSS_PREPARATION' : 'Preparing...',
            'SSS_RECOVERY' : 'Recovering',
            'SSS_CDPMERGE' : 'CDP Merging...',
            'SSS_REPLICATION' : 'Replicating',
            'SSS_STALE' : 'Stale',
            'SSS_STOP' : 'Stopped',
            'SSS_SWITCH' : 'Switching',
            'SSS_UNKNOW' : 'Unknown',
            'SSS_USED' : 'Used',
            'SSS_VP_CBT' : 'query change data',
            'SSS_VP_CFG' : 'backup virtual config',
            'SSS_VP_CHECK' : 'check data',
            'SSS_VP_PREPARE' : 'backup prepare',
            'SSS_VP_START' : 'starting',
            'SSS_START_TOO_LATE' : 'Start time cannot be later than end time!',
            'SSS_INPUT_END' : 'Please input the end time of query',
            'SSS_INPUT_START' : 'Please input the start time of query',
            'SSS_HA_STATUS_UNSYNC' : 'Data not in replication',
            'SSS_VP_MOVE':'i2vp move ok',
            'SSS_MOVE':'moved',
            'SSS_VP_PREPARE_MOVE':'Line uping',
            'SSS_VP_PREPARE_PROTECT':'protect preparing',
            'SSS_VP_SAVE':'data save',
            'SSS_VP_RESUSE':'data save',
            'SSS_VP_PEND':'vir pending',
            'SSS_VP_RUN':'vir running',
            'SSS_NAS_NEGO' : 'Negotiation',
            'SSS_NAS_RUN' : 'Running Man',
            'SSS_NAS_NET_BREAK' : 'Network BREAK',
            'SSS_CLS_OFFLINE' : 'Warning',
            'SSS_CLS_ONLINE' : 'Normal'
        },
        end: "" // 结束符号，没有意义
    }
})(I18n);
