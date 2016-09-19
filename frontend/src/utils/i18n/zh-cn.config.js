(function () {
    'use strict';
    angular.module('app.utils')
        .config(i18nCn);

    /* @ngInject */
    function i18nCn($translateProvider) {
        $translateProvider.translations('zh-CN', {
            //general
            "Create Time": "创建时间",
            "Update Time": "更新时间",
            "Operation": "操作",
            "Update": "更新",
            "Real Monitoring": "实时监控",
            "Log": "日志",
            "Detail": "详情",
            "Container": "容器",
            "Status": "状态",
            "Driver": "驱动",
            "Can not be empty": "不能为空",
            "Only number and letter": "名称必须为数字或者英文",
            "Next": "下一步",
            "Previous": "上一步",
            "Cancel": "取 消",
            "Done": "完成",
            "YES": "是",
            "NO": "否",
            "ID": "ID",
            "Labels": "标签标签",
            "Create": "创建",
            "Local": "本地",
            "Version": "版本",
            "Name": "名称",
            "Service": "服务",
            "Task": "任务",
            "Basic Information": "基本信息",
            "Not configured": "未配置",
            "No information": "暂无信息",
            "Core": "核",
            "Memory": "内存",
            "Second": "秒",
            "Environment": "环境变量",
            "Confirm": "确认",
            "Connect": "连接",
            "Add Host label": "添加主机标签",
            "System": "系统",
            "Configuration": "配置",
            "unknown": "未知",
            "More Actions": "更多操作",
            "Delete": "删除",
            "Exit": "退出",
            "Failure": "失败",
            "KEY must be numbers, letters or underscore": "KEY 只能为数字、字母或下划线",
            "KEY can not be repeated": "KEY 不能重复",
            "KEY can not contain Chinese": "KEY 不能包含中文",
            "Value can not contain Chinese": "Value 不能包含中文",
            "Competence": "权限",
            "Must be letter or digit": "必须为字母或者数字",
            "Name can not be empty": "名称不能为空",
            "Read-only": "只读",
            "Read-Write": "读写",
            "Empty": "空",
            "Options": "选项",
            "Deploy": "部署",
            "Read from a file": "从文件中读取",
            "No details": "暂无详情",
            "Username": "用户名",
            "Password": "密码",
            "Password can not be empty": "密码不能为空",
            "Passwords do not match": "密码不一致",
            "Confirm password again": "再次确认密码",
            "Username can not be empty": "用户名不能为空",


            //index module
            "LOGOUT": "登出",
            "Stack": "项目",
            "Image": "镜像",
            "Facility": "设施",
            "Node": "主机",
            "Network": "网络",
            "Warehouse certification": "仓库认证",
            "Information": "信息",
            "Activation": "激活",
            "Just try to lose something ...": "随便输点什么试试...",
            "No query to the relevant information ...": "未查询到相关信息...",
            "License will be expired": "您的序列号即将到期，请填写信息获取新的序列号。",


            //stack module
            "Stack List": "项目列表",
            "Create Project": "增加项目",
            "Service Update": "服务更新",
            "Project Detail": "项目详情",
            "Service Detail": "服务详情",
            "Choose the way to create": "选择创建方式",
            "Create of DAB": "DAB 创建",
            "Create of Form": "向导创建",
            "Create of Shortcut": "快捷创建",
            "Delete Project": "删除项目",
            "Add to template": "添加至模板",
            "Service List": "服务列表",
            "Service Name": "服务名称",
            "Task Number": "任务数",
            "Running/Total": "运行中/总数",
            "Service Scale": "修改任务数",
            "Modal title for delete stack": "项目删除后将无法恢复，确认要删除?",
            "Task List": "任务列表",
            "Discovery": "入口列表",
            "CICD": "持续部署",
            "TaskId": "任务编号",
            "Task State": "任务状态",
            "Abnormal": "异常",
            "Task_state_new": "初始化",
            "Task_state_allocated": "资源已确认",
            "Task_state_pending": "排队中",
            "Task_state_assigned": "任务已派发",
            "Task_state_accepted": "已接受",
            "Task_state_preparing": "准备中",
            "Task_state_ready": "准备就绪",
            "Task_state_starting": "启动中",
            "Task_state_running": "运行中",
            "Task_state_complete": "已完成",
            "Task_state_shutdown": "已关闭",
            "Task_state_failed": "失败",
            "Task_state_rejected": "拒绝",
            "Image Permissions": "镜像权限",
            "A host of a task": "一主机一任务",
            "StopGracePeriod": "容器退出的容忍时间",
            "StopGracePeriod Tooltip": "容器将在容忍时间之后被强制杀死",
            "Container Dir": "容器目录",
            "Resources Limits": "每个任务的资源限制",
            "Reservations": "每个任务的资源预留",
            "Fault Tolerant": "容错",
            "RestartPolicy": "重启策略",
            "Task_restart_policy_none": "不重启",
            "Task_restart_policy_any": "退出后重启",
            "Task_restart_policy_on_failure": "失败重启",
            "Delay": "重启间隔",
            "Window": "评估间隔",
            "MaxAttempts": "尝试次数",
            "Rollover": "滚动更新",
            "FailureAction": "更新失败策略",
            "Update Policy": "更新策略",
            "Keep trying": "继续尝试",
            "Stop trying": "停止尝试",
            "Interval": "间隔",
            "Number of parallel": "并行数",
            "Service Labels": "服务标签",
            "Add Service Labels": "添加服务标签",
            "Add Container Labels": "添加容器标签",
            "Add Port Mapping": "添加端口映射",
            "Adding Environment Variables": "添加环境变量",
            "Add constraints": "添加限制条件",
            "Add storage": "添加存储",
            "Memory at least 4MB": "内存最小为 4 MB",
            "Set name for project": "第一步. 给您的项目起个名字",
            "Fill in the service information": "第二步. 填写服务信息",
            "Project Name": "项目名称",
            "New Service": "新服务",
            "Service Mode": "服务模式",
            "Select Network": "选择网络",
            "Not be modified": "不支持修改",
            "Warehouse certification mark": "仓库认证标识",
            "Container working directory": "容器工作目录",
            "Command": "命令行",
            "Fixed number": "固定数",
            "A node in a task": "一节点一任务",
            "Startup Parameters": "启动参数",
            "Resource limit": "资源限制",
            "Resource limits for each task": "每个任务的资源限制",
            "Set aside resources for each task": "每个任务的资源预留",
            "Restart Policy": "重启策略",
            "Do not restart": "不重启",
            "After a failed policy": "失败后策略",
            "Immediately stop": "立即停止",
            "Scheduling Policy": "调度策略",
            "File mount": "文件挂载",
            "Host port": "主机端口",
            "Maximum host port can not exceed 65535": "主机端口最大不超过 65535",
            "Host path": "主机路径",
            "Limitation factor": "限制条件",
            "Service name can not be repeated": "服务名不能重复",
            "Mirroring can not be empty": "镜像不能为空",
            "Command can not contain Chinese": "Command 不能包含中文",
            "Args can not contain Chinese": "Args 不能包含中文",
            "CPU minimum 0.01": "CPU 最小为 0.01",
            "Maximum service port can not exceed 65535": "服务端口最大不超过 65535",
            "Minimum service port 1": "服务端口最小为 1",
            "Deployment and export": "部署并导出",
            "Continue Add": "继续添加",
            "Delete Service": "删除服务",


            // node module
            "Summary": "摘要",
            "Hostname": "主机名",
            "Network Mode": "网络模式",
            "Network Name": "网络名称",
            "HostnamePath": "hostname 文件",
            "HostsPath": "host 文件",
            "LogPath": "log 文件",
            "ResolvConfPath": "resolv.conf 文件",
            "Port Mapping": "端口映射",
            "Port": "端口",
            "Protocol": "协议",
            "Network Configuration": "网络配置",
            "Gateway": "网关",
            "Gateway illegal": "网关不合法",
            "IP Address": "IP 地址",
            "MAC Address": "MAC 地址",
            "Gateway IP": "网关 IP",
            "Container tag": "容器标签",
            "Volume": "存储卷",
            "Path": "路径",
            "Start Command": "启动命令",
            "Image Name": "镜像名称",
            "Change": "变更",
            "Terminal": "终端",
            "Change ode": "变更方式",
            "File Path": "文件路径",
            "No information about the changes": "未查询到变更信息",
            "No log information": "无日志信息",
            "IP address format error": "IP 地址格式错误",
            "Host IP": "主机 IP",
            "IP range": "IP 范围",
            "IP range illegal": "IP 范围不合法",
            "Install Docker": "1. 安装 Docker",
            "Docker intalled": "主机已安装 Docker，请跳过。",
            "Copy code": "点击复制代码",
            "Add host commad": "2. 添加主机命令",
            "Exec add host cmd": "请登录目标主机，运行以下命令，本操作需要 sudo 权限。",
            "Create host nerwork": "创建单机网络",
            "Subnet Mask": "子网掩码",
            "Subnet Mask illegal": "子网掩码不合法",
            "Internal Network": "内部网络",
            "Can add multiple labels": "可添加多个标签",
            "Add labels": "添加标签",
            "Labels key can not contain Chinese": "标签 Key 不能包含中文",
            "Labels key can not repeat": "标签 Key 不能重复",
            "Labels value can not contain Chinese": "标签 Value 不能包含中文",
            "Add volume": "添加存储卷",
            "Volume name": "卷名",
            "Docker info": "Docker 信息",
            "Volume driver": "存储驱动",
            "Volume dir": "存储目录",
            "Debug model": "Debug 模式",
            "Cgroup driver": "Cgroup 驱动",
            "Allows memory overflow": "允许内存溢出",
            "Host information": "主机信息",
            "Kernel version": "内核版本",
            "System time": "系统时间",
            "Internal address": "对内地址",
            "Status and operation hours": "状态/运行时间",
            "Remove": "移除",
            "Kill": "杀死",
            "Running containers": "运行容器",
            "Total containers": "容器总数",
            "Pasued containers": "暂停容器",
            "Stopped containers": "停止容器",
            "Images": "镜像个数",
            "Host labels": "主机标签",
            "Created volume": "创建存储卷",
            "Size": "大小",
            "Remove image": "删除镜像",
            "Container number": "容器数",
            "Remove network": "删除网络",
            "Mount points": "挂载点",
            "Remove volume": "删除储存卷",
            "Vol_driver_local": "本地",
            "Node List": "主机列表",
            "Add Node": "添加主机",
            "Node Detail": "主机详情",
            "Image Detail": "镜像详情",
            "Container Detail": "容器详情",
            "Volume Detail": "存储详情",
            "Role": "角色",
            "Availability": "可用性",
            "Connect host": "连接主机",
            "Connect host tooltip": "编辑连接主机Docker Daemon的地址",
            "Edit label": "编辑标签",
            "Edit label tooltip": "编辑主机标签",
            "Stop scheduling": "停止调度",
            "Stop scheduling tooltip": "停止调度后该主机上的任务将被分配到其它主机上, 新的任务也不会被分配到该主机",
            "Restore scheduling": "恢复调度",
            "Restore scheduling tooltip": "恢复任务在这台主机上的自由调度",
            "Pause scheduling": "暂停调度",
            "Pause scheduling tooltip": "暂停调度后新的任务将不再被分配到该主机，但已经发布到该主机上的任务不会受到影响",
            "Delete host": "删除主机",
            "Delete host tooltip": "删除主机，注意只有状态为Down的主机才能被删除",
            "Node_role_worker": "工作节点",
            "Node_role_manager": "管理节点",
            "Node_availability_drain": "停止调度",
            "Node_availability_active": "正常调度",
            "Node_availability_pause": "暂停调度",
            "Node_state_unknown": "未知",
            "Node_state_down": "下线",
            "Node_state_ready": "就绪",
            "Node_state_disconnected": "失联",
            "The number of tasks": "任务个数",
            "Need Docker TCP Socket Addrs": "需要主机的 Docker TCP Socket 地址",
            "Provide Docker TCP Socket Addrs": "请提供该主机 Docker Daemon 的 TCP Socket 地址。",
            "Open Docker TCP Socket Service": "为了获取主机详情信息，需要在该主机上开启 Docker Daemon TCP Socket 服务。",
            "Docker TCP Socket Addrs": "Docker TCP Socket 地址",
            "Address can not be empty": "地址不能为空",
            "How to configure Docker Daemon Socket Addrs": "如何配置 Docker Daemon 的 TCP Socket 地址?",
            "Edit the docker.service file": "编辑文件 /usr/lib/systemd/system/docker.service , 设置",
            "Edit the docker file": "编辑文件 /etc/default/docker , 设置",
            "Save and Run Command": "保存并执行命令",
            "Are you sure that host offline ?": "是否确认下线该主机？",
            "Are you sure to activate the host ?": "是否确认激活该主机？",
            "Are you sure to delete this host ?": "是否确认删除该主机？",
            "Are you sure the host is suspended ?": "是否确认暂停该主机？",
            "Are you sure to delete the storage volume ?": "是否确认删除该储存卷？",
            "Are you sure to delete the image ?": "是否确认删除该镜像？",
            "Are you sure to remove the container ?": "是否确认移除该容器？",
            "Are you sure to kill the container ?": "是否确认杀死该容器？",
            "Image size": "镜像大小",
            "Layer": "层级",
            "Docker Version": "Docker 版本",
            "Architecture": "架构",
            "Container hostname": "容器主机名",
            "No query information about the changes": "未查询到变更信息",
            "Container_status_labels_running": "运行中",
            "Container_status_labels_paused": "暂停中",
            "Container_status_labels_dead": "已崩溃",
            "Container_status_labels_restarting": "正在重启中",
            "Container_status_labels_created": "初始化中",
            "Container_status_labels_exited": "已退出",
            "Docker storage directory": "Docker 存储目录",
            "Diff_kind_0": "修改",
            "Diff_kind_1": "添加",
            "Diff_kind_2": "删除",


            //registry-auth module
            "Registry auth list": "管理列表",
            "Add registry auth": "添加认证",
            "Certification mark": "认证标识",
            "Are you sure to delete this certificate ?": "是否确认删除该认证 ?",

            //registry module
            "Schema Version": "Schema 版本",
            "Image List": "镜像列表",
            "Project Deployment": "项目部署",
            "Creating project templates": "创建项目模板",
            "Update project templates": "更新项目模板",
            "How to create a mirror": "如何创建镜像",
            "Project Templates": "项目模板",
            "Public Mirror": "公有镜像",
            "My Mirror": "我的镜像",
            "New Project Template": "新建项目模板",
            "Project description": "项目描述",
            "Are you sure to remove the mirror ?": "是否确认删除镜像？",
            "Are you sure to delete the project template ?": "是否确认删除该项目模板？",

            //network module
            "Network List": "网络列表",
            "Type": "类型",
            "Create Network": "创建网络",
            "Network Detail": "网络详情",
            "Scope": "作用范围",
            "Support IPv6": "支持 IPv6",
            "Only the internal network": "仅内部网络",
            "Address Management": "地址管理",
            "Connections container": "连接容器",
            "Container Name": "容器名称",
            "IPv4 address": "IPv4 地址",
            "IPv6 address": "IPv6 地址",
            "No query information to a network": "未查询到网络信息",
            "Are you sure to delete the network ?": "是否确认删除该网络 ?",

            //misc module
            "Cluster Name": "集群名称",
            "Token management node": "管理节点 Token",
            "Working node Token": "工作节点 Token",
            "Cluster Information": "集群信息",


            //Notification
            "Host successful update": "更新主机成功",
            "Successfully deleted": "删除成功",
            "Kill Success": "杀死成功",
            "Success offline": "下线成功",
            "Activation successful": "激活成功",
            "Host successfully deleted": "主机删除成功",
            "Pause success": "暂停成功",
            "Creating Success": "创建成功",
            "Update Success": "更新成功",
            "Modify the number of tasks successfully": "修改任务数成功",
            "The project began to deploy , the deployment time-dependent mirror pull time , please wait": "项目开始部署，部署时间依赖镜像拉取时间，请稍后",

            //error code
            "CODE_MESSAGE_10000": "服务忙, 请稍后重试",
            "CODE_MESSAGE_10001": "服务忙, 请稍后重试",
            "CODE_MESSAGE_10002": "参数错误                            ",
            "CODE_MESSAGE_11001": "获取容器列表参数错误",
            "CODE_MESSAGE_11002": "更新容器参数错误",
            "CODE_MESSAGE_11003": "不支持的容器更新操作",
            "CODE_MESSAGE_11004": "不支持的容器删除操作",
            "CODE_MESSAGE_11005": "不支持的删除容器操作",
            "CODE_MESSAGE_11006": "未找到指定容器",
            "CODE_MESSAGE_11007": "指定容器已经处于运行中状态",
            "CODE_MESSAGE_11008": "指定容器需要处于运行中状态",
            "CODE_MESSAGE_11009": "不支持的镜像名称",
            "CODE_MESSAGE_11101": "获取镜像列表参数错误",
            "CODE_MESSAGE_11201": "连接到指定网络参数错误",
            "CODE_MESSAGE_11202": "不支持的网络连接操作",
            "CODE_MESSAGE_11203": "创建网络参数错误",
            "CODE_MESSAGE_11204": "查看指定网络详情参数错误",
            "CODE_MESSAGE_11205": "获取网络列表参数错误",
            "CODE_MESSAGE_11206": "不能操作系统内置网络",
            "CODE_MESSAGE_11207": "未找到指定网络",
            "CODE_MESSAGE_11208": "未找到指定容器或网络",
            "CODE_MESSAGE_11209": "创建网络失败, 不支持的网络名称",
            "CODE_MESSAGE_11301": "更新节点参数错误",
            "CODE_MESSAGE_11302": "不支持的节点操作类型",
            "CODE_MESSAGE_11303": "未定义的节点角色",
            "CODE_MESSAGE_11304": "不支持的节点状态",
            "CODE_MESSAGE_11305": "获取及节点信息失败",
            "CODE_MESSAGE_11401": "更新服务参数错误",
            "CODE_MESSAGE_11402": "创建服务参数错误",
            "CODE_MESSAGE_11403": "扩展服务参数错误",
            "CODE_MESSAGE_11404": "不支持的服务CPU参数",
            "CODE_MESSAGE_11405": "不支持的服务延迟参数",
            "CODE_MESSAGE_11406": "不支持的服务重启窗口参数",
            "CODE_MESSAGE_11407": "不支持的服务终端参数",
            "CODE_MESSAGE_11408": "不支持的服务设置参数",
            "CODE_MESSAGE_11409": "不支持的服务内存参数",
            "CODE_MESSAGE_11410": "不支持的服务更新参数",
            "CODE_MESSAGE_11411": "服务参数不能为空",
            "CODE_MESSAGE_11412": "不支持的服务名称",
            "CODE_MESSAGE_11413": "服务映射端口冲突",
            "CODE_MESSAGE_11501": "创建项目参数错误",
            "CODE_MESSAGE_11502": "创建项目失败, 不支持的项目名称",
            "CODE_MESSAGE_11601": "创建存储参数错误",
            "CODE_MESSAGE_11602": "创建存储失败, 不支持的存储名称",
            "CODE_MESSAGE_11701": "连接到指定节点失败",
            "CODE_MESSAGE_11702": "连接到指定节点失败, 目标地址为空",
            "CODE_MESSAGE_11703": "指定节点的连接地址和节点ID不匹配",
            "CODE_MESSAGE_11704": "连接到指定节点失败, 错误的访问地址",
            "CODE_MESSAGE_11901": "获取配置失败",
            "CODE_MESSAGE_12001": "未定义的用户组",
            "CODE_MESSAGE_12002": "创建用户参数错误",
            "CODE_MESSAGE_12003": "添加用户权限失败",
            "CODE_MESSAGE_12004": "获取指定用户失败",
            "CODE_MESSAGE_12005": "未找到指定用户",
            "CODE_MESSAGE_12006": "登陆参数错误",
            "CODE_MESSAGE_12007": "登陆失败",
            "CODE_MESSAGE_12008": "登出失败",
            "CODE_MESSAGE_12009": "用户组错误",
            "CODE_MESSAGE_12010": "指定用户组内未找到用户",
            "CODE_MESSAGE_12011": "用户ID错误",
            "CODE_MESSAGE_12012": "指定用户组未找到",
            "CODE_MESSAGE_12013": "未定义的用户组ID",
            "CODE_MESSAGE_12014": "未找到指定的用户组ID",
            "CODE_MESSAGE_12015": "获取用户组列表失败",
            "CODE_MESSAGE_12016": "用户没有修改权限",
            "CODE_MESSAGE_12017": "创建用户组参数错误",
            "CODE_MESSAGE_12018": "创建用户组失败",
            "CODE_MESSAGE_12019": "更新用户组参数错误",
            "CODE_MESSAGE_12020": "更新用户组失败",
            "CODE_MESSAGE_12021": "删除用户组失败, 用户组ID错误",
            "CODE_MESSAGE_12022": "删除用户组失败",
            "CODE_MESSAGE_12023": "加入用户组失败, 用户组ID错误",
            "CODE_MESSAGE_12024": "加入用户组失败, 用户ID错误",
            "CODE_MESSAGE_12025": "加入用户组失败",
            "CODE_MESSAGE_12026": "离开用户组失败, 用户组ID错误",
            "CODE_MESSAGE_12027": "离开用户组失败, 用户ID错误",
            "CODE_MESSAGE_12028": "离开用户组失败",
            "CODE_MESSAGE_12029": "添加服务权限失败, 参数错误",
            "CODE_MESSAGE_12030": "添加服务权限失败",
            "CODE_MESSAGE_12031": "移除服务权限失败, 无效的查询词",
            "CODE_MESSAGE_12032": "移除服务权限失败",
            "CODE_MESSAGE_13001": "查询关键词错误",
            "CODE_MESSAGE_14001": "获取镜像仓库配置失败",
            "CODE_MESSAGE_14002": "获取镜像仓库配置失败, 参数解析错误",
            "CODE_MESSAGE_14003": "删除镜像仓库配置失败",
            "CODE_MESSAGE_14004": "镜像公开失败, 参数错误",
            "CODE_MESSAGE_14005": "镜像公开失败, 更新错误",
            "CODE_MESSAGE_14006": "获取镜像仓库项目模板列表失败",
            "CODE_MESSAGE_14007": "获取镜像Tag失败",
            "CODE_MESSAGE_14008": "获取镜像仓库Token失败",
            "CODE_MESSAGE_14009": "无效的验证信息",
            "CODE_MESSAGE_14010": "生成Token失败",
            "CODE_MESSAGE_15031": "获取项目模板列表错误",
            "CODE_MESSAGE_15032": "获取项目模板错误",
            "CODE_MESSAGE_15033": "无效的用户",
            "CODE_MESSAGE_15034": "无效的项目模板",
            "CODE_MESSAGE_15035": "无效的请求参数",
            "CODE_MESSAGE_15036": "无效的图片,请换一张试试",
            "CODE_MESSAGE_15037": "项目模板删除失败",
            "CODE_MESSAGE_15038": "项目模板禁止操作",
            "CODE_MESSAGE_15039": "项目模板更新失败",
            "CODE_MESSAGE_15040": "项目模板创建失败",
            "CODE_MESSAGE_16001": "获取 License 失败",
            "CODE_MESSAGE_16002": "激活 License 失败",
            "CODE_MESSAGE_16003": "无激活码,请激活",
            "CODE_MESSAGE_17001": "增加仓库认证参数错误",
            "CODE_MESSAGE_17002": "仓库认证已存在",
            "CODE_MESSAGE_17003": "删除仓库认证参数错误",
            "CODE_MESSAGE_17004": "无效的用户",
        });
    }
})();
