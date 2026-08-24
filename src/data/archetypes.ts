import type { ArchetypeProfile, ArchetypeKey } from "@/types";

// ─── AIMIND Archetype Profiles ───────────────────────────────────────────────
// 6 mô thức hành vi cốt lõi trong hệ thống Bản đồ Nội Tâm AIMIND

export const archetypes: Record<ArchetypeKey, ArchetypeProfile> = {
  "lo-au": {
    key: "lo-au",
    name: "Xu hướng Lo Âu Gắn Bó",
    tagline: "Bạn yêu sâu sắc — nhưng luôn sợ bị bỏ lại",
    description:
      "Kết quả hiện tại cho thấy bạn có thể trân trọng sự gắn kết sâu sắc, đồng thời dễ lo lắng khi cảm nhận khoảng cách hoặc sự không chắc chắn. Bạn có thể thường xuyên kiểm tra, cần được trấn an hoặc nghĩ đến những kịch bản không mong muốn.",
    coreWound:
      "Một cách để khám phá xu hướng này là quan sát những trải nghiệm từng khiến sự gần gũi trở nên không chắc chắn, và cách bạn đã học để tìm kiếm cảm giác an toàn.",
    hiddenFear:
      "Trong một số tình huống, bạn có thể lo rằng mình không đủ quan trọng hoặc người khác sẽ không ở lại.",
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
    name: "Xu hướng Né Tránh",
    tagline: "Bạn cần không gian — nhưng thật ra là cần an toàn",
    description:
      "Kết quả hiện tại cho thấy bạn có thể trân trọng sự độc lập và không gian cá nhân. Khi cảm thấy áp lực hoặc quá gần, bạn có xu hướng lùi lại để tự bảo vệ, ngay cả khi vẫn mong muốn kết nối.",
    coreWound:
      "Một cách để khám phá xu hướng này là quan sát khi nào việc dựa vào người khác gợi lên cảm giác không chắc chắn, và vì sao tự chủ trở thành lựa chọn quen thuộc.",
    hiddenFear:
      "Trong một số tình huống, bạn có thể lo rằng sự gần gũi sẽ làm mất không gian riêng hoặc khiến mình dễ bị tổn thương.",
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
    name: "Xu hướng Kiểm Soát",
    tagline: "Bạn làm mọi thứ hoàn hảo — vì sai sót cảm thấy nguy hiểm",
    description:
      "Kết quả hiện tại cho thấy bạn có thể đặt tiêu chuẩn cao và chuẩn bị kỹ. Khi thiếu chắc chắn, bạn có xu hướng lên kế hoạch hoặc kiểm soát nhiều hơn để cảm thấy an toàn.",
    coreWound:
      "Một cách để khám phá xu hướng này là quan sát những tình huống thiếu chắc chắn và cách việc kiểm soát giúp bạn tạm thời cảm thấy an toàn hơn.",
    hiddenFear:
      "Trong một số tình huống, bạn có thể lo mình không ứng phó được nếu kế hoạch thay đổi, hoặc giá trị bản thân bị ảnh hưởng khi mắc sai sót.",
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
    name: "Xu hướng Hy Sinh",
    tagline: "Bạn chăm lo cho mọi người — và quên mất chính mình",
    description:
      "Kết quả hiện tại cho thấy bạn có thể rất quan tâm và sẵn sàng giúp đỡ người khác. Trong một số tình huống, bạn có xu hướng đặt nhu cầu của họ lên trước và thấy khó nói 'không'.",
    coreWound:
      "Một cách để khám phá xu hướng này là quan sát khi nào việc trở nên hữu ích hoặc không gây phiền giúp bạn cảm thấy được chấp nhận.",
    hiddenFear:
      "Trong một số tình huống, bạn có thể lo rằng mình sẽ ít được trân trọng hơn nếu không tiếp tục cho đi hoặc đáp ứng kỳ vọng.",
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
    name: "Xu hướng Tự Hủy",
    tagline: "Bạn tiến gần đến thành công — rồi tự phá vỡ nó",
    description:
      "Kết quả hiện tại cho thấy bạn có thể trì hoãn, đổi hướng hoặc làm gián đoạn điều tốt ngay khi nó trở nên quan trọng. Đây có thể là một cách tự bảo vệ trước áp lực, rủi ro hoặc cảm giác bị nhìn thấy.",
    coreWound:
      "Một cách để khám phá xu hướng này là quan sát cảm xúc xuất hiện khi bạn tiến gần đến thành công, sự ổn định hoặc sự công nhận.",
    hiddenFear:
      "Trong một số tình huống, bạn có thể lo mình không xứng đáng với kết quả tốt hoặc những thay đổi đi cùng thành công.",
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
    name: "Xu hướng Cân Bằng",
    tagline: "Bạn đang trong hành trình tích hợp bản thân",
    description:
      "Kết quả hiện tại chưa cho thấy một xu hướng nào nổi bật vượt trội. Điều này có thể phản ánh sự linh hoạt, bối cảnh trả lời đa dạng hoặc một giai đoạn đang thay đổi.",
    coreWound:
      "Một điểm khởi đầu là quan sát những tình huống vẫn tạo phản ứng mạnh, thay vì giả định rằng mọi điều trong quá khứ đều đã được giải quyết.",
    hiddenFear:
      "Trong một số trường hợp, các xu hướng có thể xuất hiện khác nhau tùy bối cảnh và chưa thể hiện rõ trong một bài test ngắn.",
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
