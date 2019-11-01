<template>
    <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
        <div class="scroll-wrapper" ref="scrollWrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
	export default {
		name: "ScrollPane",
		data() {
			return {
				left: 0
			}
		},
		methods: {
			handleScroll(e) {//鼠标滚轮事件
				const eventDelta = e.wheelDelta || -e.deltaY * 3
				//获取当前元素
				const $contaniner = this.$refs.scrollContainer
				const $contanierWidth = $contaniner.offsetWidth
				const $wrapper = this.$refs.scrollWrapper
				const $wrapperWidth = $wrapper.offsetWidth
				if (eventDelta > 0) {
					this.left = Math.min(0, this.left + eventDelta) //回指定数字中带有最低值的数字
				} else {
					if ($contanierWidth - padding < $wrapperWidth) {
						if (this.left < -($wrapperWidth - $contaniner + padding)) {
							this.left = this.left;
						} else {
							this.left = Math.max(this.left + eventDelta, $contanierWidth - $wrapperWidth - padding)
						}

					} else {
						this.left = 0;
					}
				}


			},
			moveToTarget($target) {
				const $container = this.$refs.scrollContainer
				const $containerWidth = $container.offsetWidth
				const $targetLeft = $target.offsetLeft
				const $targetWidth = $target.offsetWidth
				if ($targetLeft < -this.left) {
					// tag in the left
					this.left = -$targetLeft + padding
				} else if ($targetLeft + padding > -this.left && $targetLeft + $targetWidth < -this.left + $containerWidth - padding) {
					// tag in the current view
					// eslint-disable-line
				} else {
					// tag in the right
					this.left = -($targetLeft - ($containerWidth - $targetWidth) + padding)
				}
			}

		}
	}
</script>

<style scoped>

</style>