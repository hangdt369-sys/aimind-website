import type { ArchetypeProfile, ArchetypeKey } from "@/types";

// ─── AIMIND Archetype Profiles ───────────────────────────────────────────────
// 6 mô thức hành vi cốt lõi trong hệ thống Bản đồ Nội Tâm AIMIND

export const archetypes: Record<ArchetypeKey, ArchetypeProfile> = {
  "lo-au": {
    key: "lo-au",
    name: "Người Lo Âu Gắn Bó",
    tagline: "Bạn yêu sâu sắc — nhưng luôn sợ bị bỏ lại",
    description:
      "Bạn có khả năng yêu thương rất chân thành và gắn kết sâu sắc. Nhưng bên trong luôn có một tiếng thì thầm: 'Người này rồi sẽ rời bỏ mình.' Bạn hay kiểm tra, hay cần được trấn an, và thường cảm thấy bất an ngay cả khi mọi thứ đang ổn.",
    coreWound:
      "Trong quá khứ, tình yêu thương đến không nhất quán — đôi khi có, đôi khi không. Bạn học được rằng bạn phải làm điều gì đó để được yêu.",
    hiddenFear:
      "Sâu thẳm bên trong, bạn sợ rằng bản thân mình không đủ tốt để được ai đó thật sự ở lại.",
    behaviorPattern: [
      "Hay kiểm tra tin nhắn, cần phản hồi nhanh để cảm thấy an toàn",
      "Khi bị phớt lờ — dù một chút — cảm giác lo âu bùng lên ngay",
      "Trong mối quan hệ, bạn thường cho nhiều hơn nhận",
      "Hay tưởng tượng kịch bản tệ nhất khi có dấu hiệu bất ổn",
      "Khó buông bỏ ngay cả khi mối quan hệ không còn tốt",
    ],
    strengths: [
      "Sự nhạy cảm và đồng cảm sâu sắc",
      "Khả năng yêu thương chân thành và trung thành",
      "Hiểu được cảm xúc người khác tốt hơn hầu hết",
    ],
    growthEdge:
      "Học cách cảm thấy an toàn từ bên trong — không phụ thuộc vào sự có mặt của người khác để biết mình có giá trị.",
    nextStep:
      "Khóa học 'Bản đồ Nội Tâm Chuyên Sâu' sẽ giúp bạn hiểu nguồn gốc của mô thức này và bắt đầu xây dựng sự an toàn từ bên trong.",
    color: "#7C6FF7",
    icon: "🌊",
  },

  "ne-tranh": {
    key: "ne-tranh",
    name: "Người Né Tránh",
    tagline: "Bạn cần không gian — nhưng thật ra là cần an toàn",
    description:
      "Bạn trân trọng sự độc lập và không gian cá nhân. Khi mọi người đến quá gần, bạn tự nhiên lùi lại. Không phải vì không muốn kết nối — mà vì gần gũi cảm thấy nguy hiểm theo một cách nào đó bạn khó giải thích.",
    coreWound:
      "Bạn đã học được rằng dựa dẫm vào người khác thường dẫn đến thất vọng. Tự lực cánh sinh trở thành chiến lược sống sót.",
    hiddenFear:
      "Bạn sợ mất đi bản thân nếu để người khác tiếp cận quá sâu. Và sợ rằng nếu họ thật sự biết bạn — họ sẽ rời đi.",
    behaviorPattern: [
      "Khi cảm xúc leo thang, bạn rút lui về không gian riêng",
      "Khó nói 'tôi cần bạn' — ngay cả khi đó là sự thật",
      "Hay bận rộn với công việc để không phải đối mặt với cảm xúc",
      "Trong mối quan hệ, bạn thường cần 'break' để tái nạp",
      "Cảm thấy mình bị hiểu lầm là 'lạnh lùng' hay 'không quan tâm'",
    ],
    strengths: [
      "Tự chủ và khả năng giải quyết vấn đề độc lập",
      "Bình tĩnh trong khủng hoảng — ít bị cuốn vào cảm xúc",
      "Rất đáng tin cậy khi đã cam kết với điều gì",
    ],
    growthEdge:
      "Học cách để người khác đến gần mà không cảm thấy đang mất đi chính mình.",
    nextStep:
      "Khóa học 'Bản đồ Nội Tâm Chuyên Sâu' sẽ giúp bạn hiểu cơ chế phòng vệ và tìm cách kết nối mà không cần hy sinh sự tự do.",
    color: "#18B5B0",
    icon: "🏔️",
  },

  "kiem-soat": {
    key: "kiem-soat",
    name: "Người Kiểm Soát",
    tagline: "Bạn làm mọi thứ hoàn hảo — vì sai sót cảm thấy nguy hiểm",
    description:
      "Bạn có tiêu chuẩn cao và làm việc cực kỳ hiệu quả. Nhưng có một phần bạn không thể thư giãn — vì nếu không kiểm soát mọi thứ, cảm giác lo lắng trỗi dậy. Bạn hay lên kế hoạch, hay chuẩn bị cho tình huống xấu nhất.",
    coreWound:
      "Khi còn nhỏ, thế giới xung quanh có thể không nhất quán hoặc không an toàn. Kiểm soát trở thành cách bạn cảm thấy an toàn.",
    hiddenFear:
      "Nếu mọi thứ không theo kế hoạch — bạn không biết mình sẽ cope được không. Và sâu hơn: sợ mình không đủ tốt nếu không hoàn hảo.",
    behaviorPattern: [
      "Khó giao việc cho người khác vì sợ không đạt tiêu chuẩn",
      "Hay lo lắng về tương lai, lên kế hoạch cho mọi kịch bản",
      "Phê phán bản thân rất nặng khi mắc sai lầm",
      "Khó buông bỏ khi mọi thứ không đi theo dự kiến",
      "Hay cảm thấy gánh nặng vì phải 'gánh' quá nhiều",
    ],
    strengths: [
      "Kỷ luật và khả năng tổ chức xuất sắc",
      "Đáng tin cậy — luôn hoàn thành những gì đã cam kết",
      "Khả năng nhìn xa và chuẩn bị kỹ càng",
    ],
    growthEdge:
      "Học cách tin tưởng — tin vào người khác, tin vào quá trình, và tin rằng bạn ổn ngay cả khi không hoàn hảo.",
    nextStep:
      "Khóa học 'Bản đồ Nội Tâm Chuyên Sâu' giúp bạn hiểu nguồn gốc của nhu cầu kiểm soát và tìm cách sống nhẹ hơn.",
    color: "#5B4FD4",
    icon: "⚡",
  },

  "hy-sinh": {
    key: "hy-sinh",
    name: "Người Hy Sinh",
    tagline: "Bạn chăm lo cho mọi người — và quên mất chính mình",
    description:
      "Bạn có trái tim rộng lượng và luôn sẵn sàng giúp đỡ. Nhưng thường xuyên, bạn để nhu cầu người khác lên trước — đến mức quên mất bản thân mình cần gì. Nói 'không' cảm thấy như đang làm điều gì sai trái.",
    coreWound:
      "Bạn học được rằng mình được chấp nhận và yêu thương khi hữu ích, khi không gây rắc rối. Sự tồn tại của bạn gắn liền với việc phục vụ người khác.",
    hiddenFear:
      "Nếu bạn không còn hữu ích — người ta sẽ không còn cần bạn nữa. Và sâu hơn: sợ rằng bản thân bạn không đủ để được yêu khi không cho đi gì cả.",
    behaviorPattern: [
      "Rất khó nói 'không' — dù trong lòng đang mệt mỏi",
      "Hay cảm thấy tội lỗi khi nghĩ đến nhu cầu của bản thân",
      "Thường biết người khác cần gì trước khi biết mình cần gì",
      "Hay cảm thấy kiệt sức nhưng vẫn tiếp tục cho đi",
      "Đôi khi tích tụ oán giận vì cảm thấy không được nhận lại",
    ],
    strengths: [
      "Khả năng đồng cảm và chăm sóc thật sự",
      "Tạo ra sự ấm áp và gắn kết trong mối quan hệ",
      "Trực giác nhạy bén về cảm xúc người xung quanh",
    ],
    growthEdge:
      "Học cách nhận — nhận tình yêu, nhận sự giúp đỡ, và nhận ra rằng bạn có giá trị ngay cả khi không làm gì cho ai.",
    nextStep:
      "Khóa học 'Bản đồ Nội Tâm Chuyên Sâu' giúp bạn tìm lại chính mình và học cách yêu thương bản thân mà không cảm thấy ích kỷ.",
    color: "#E67E74",
    icon: "🌸",
  },

  "tu-huy": {
    key: "tu-huy",
    name: "Người Tự Hủy",
    tagline: "Bạn tiến gần đến thành công — rồi tự phá vỡ nó",
    description:
      "Bạn có tiềm năng thật sự — điều này bạn biết. Nhưng có điều gì đó cứ kéo bạn lại đúng lúc sắp đạt được. Có thể là trì hoãn, có thể là tự phá hoại, có thể là chọn sai người. Đây không phải lười biếng — đây là hệ thần kinh đang bảo vệ bạn khỏi điều gì đó.",
    coreWound:
      "Thành công, hạnh phúc, hay được nhìn thấy — cảm thấy nguy hiểm theo một cách nào đó. Có thể từ những lần trong quá khứ khi điều tốt bị lấy đi.",
    hiddenFear:
      "Sợ rằng nếu thật sự thành công — người ta sẽ thấy rằng mình không xứng đáng. Hoặc sợ thành công sẽ thay đổi mình theo cách mình không muốn.",
    behaviorPattern: [
      "Trì hoãn ngay trước deadline quan trọng",
      "Chọn những mối quan hệ không phù hợp dù biết rõ",
      "Hay tự phê phán rất nặng nề",
      "Khởi đầu nhiều thứ nhưng ít hoàn thành",
      "Hay phá vỡ điều tốt khi nó bắt đầu đi đúng hướng",
    ],
    strengths: [
      "Sự sáng tạo và khả năng nhìn ra nhiều khả năng",
      "Sự nhạy cảm sâu sắc và khả năng tư duy độc đáo",
      "Khi tìm được niềm tin — có thể đạt được rất nhiều",
    ],
    growthEdge:
      "Học cách để mình được thành công và hạnh phúc — và nhận ra rằng bạn xứng đáng với những điều tốt đẹp.",
    nextStep:
      "Khóa học 'Bản đồ Nội Tâm Chuyên Sâu' giúp bạn nhìn thấy cơ chế tự phá hoại và bắt đầu tháo gỡ từng lớp.",
    color: "#3B3772",
    icon: "🔥",
  },

  "can-bang": {
    key: "can-bang",
    name: "Người Cân Bằng",
    tagline: "Bạn đang trong hành trình tích hợp bản thân",
    description:
      "Bạn có sự cân bằng khá tốt giữa các mô thức — không bị chi phối hoàn toàn bởi một khuôn mẫu nào. Điều này có thể có nghĩa bạn đã tự nhận thức khá nhiều, hoặc đang ở giai đoạn chuyển tiếp giữa các mô thức.",
    coreWound:
      "Mỗi người đều có những vết thương từ quá khứ — câu hỏi là bạn đã nhận ra và bắt đầu chữa lành chưa.",
    hiddenFear:
      "Đôi khi sự cân bằng là lớp bề ngoài che đi những mô thức chưa được khám phá.",
    behaviorPattern: [
      "Có thể thích nghi tốt trong nhiều tình huống khác nhau",
      "Đôi khi không chắc mình thật sự muốn gì",
      "Có thể thấy mình ở những nơi khác nhau tùy hoàn cảnh",
    ],
    strengths: [
      "Linh hoạt và khả năng thích nghi",
      "Nhìn được nhiều góc độ của một vấn đề",
      "Không bị cứng nhắc trong một khuôn mẫu duy nhất",
    ],
    growthEdge:
      "Khám phá sâu hơn để nhìn thấy những mô thức tinh tế hơn đang vận hành bên dưới.",
    nextStep:
      "Khóa học 'Bản đồ Nội Tâm Chuyên Sâu' sẽ giúp bạn nhìn thấy những tầng sâu hơn của bản thân mà bài test tổng quát chưa chạm đến.",
    color: "#18B5B0",
    icon: "🧭",
  },
};

export function getArchetype(key: ArchetypeKey): ArchetypeProfile {
  return archetypes[key];
}

export const archetypeOrder: ArchetypeKey[] = [
  "lo-au",
  "ne-tranh",
  "kiem-soat",
  "hy-sinh",
  "tu-huy",
  "can-bang",
];
