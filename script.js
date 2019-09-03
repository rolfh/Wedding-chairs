var vm = new Vue({
	el: '#app',
	data() {
		return {
			chairs: [],
			bait: false,
			hide: false,
			positions: false
		}
	},
	mounted() {
		fetch('navn.json')
			.then(blob => blob.json())
			.then(data => {
				this.chairs = data
			})
		document.addEventListener('keydown', event => {
			if (event.key == 'h') {
				this.hide = !this.hide
			}
			if (event.key == 'b') {
				this.bait = !this.bait
			}
			if (event.key == 'p') {
				this.positions = !this.positions
			}
		})
	}
})
