<template>
  <DialogBox overflowY="auto" :class="dialogClass">
    <div><UnderlineText>選擇您的角色： (已獲得{{myInfo.avatarList.length}}/{{TOTAL_AVATAR}})</UnderlineText></div>          
    <Well>
			<div class="grid">
        <AvatarPickerBtn v-for="(avatar,i) in avatarList" 
          :index="avatar" :key="i" 
          :whoAmI="!myInfo.avatarList.includes(avatar)" 
       />
			</div>
    </Well>
  </DialogBox>
</template>

<script>
import UnderlineText from '../UnderlineText'
import Well from '../Well'
import AvatarPickerBtn from '../AvatarPickerBtn'
import DialogBox from '../DialogBox'
import { TOTAL_AVATAR } from '../../common'
import { mapGetters } from 'vuex'

export default {
  components: { UnderlineText, Well, AvatarPickerBtn, DialogBox },
  data() { return { dialogClass: 'animated flipInY' } },
  mounted() { this.$el.addEventListener("animationend", () => this.dialogClass = '') },
  computed: {
    avatarList() {
      const list = [...this.myInfo.avatarList]
      for (let i = 0; i < TOTAL_AVATAR; i++)
        if (!this.myInfo.avatarList.includes(i))
          list.push(i)
      return list
    },
    TOTAL_AVATAR() { return TOTAL_AVATAR },
    ...mapGetters(['myInfo'])
  }
}
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>