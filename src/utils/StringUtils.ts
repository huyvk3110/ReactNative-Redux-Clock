export default class StringUtils {
    static timeFormatMiliseconds(time: number): string[] {
        let mm = this.pad(Math.floor(time / (60 * 1000)), 2);
        time = time % (60 * 1000);
        let ss = this.pad(Math.floor(time / (1000)), 2);
        time = time % (1000);
        let ms = Math.floor(time / 10) < 100 ? this.pad(Math.floor(time / 10), 2): '00'
        return [mm, ss, ms];
    }

    static pad(number: number, width: number, z?: string): string {
        let n = number.toString();
        z = z || '0';
        n = n + '';
        return n.length >= width ? n.toString() : new Array(width - n.length + 1).join(z) + n;
    }
}