<!-- 单文件上传组件 -->
<template>
    <div>
        <el-upload
                class="upload-demo"
                drag
                action="http://192.168.2.102:9090/proImp/upload"
                multiple
                name="file">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
<!--            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
        </el-upload>
    </div>
</template>

<script>

</script>