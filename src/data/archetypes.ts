import type { ArchetypeProfile, ArchetypeKey } from "@/types";

// ─── AIMIND Archetype Profiles ───────────────────────────────────────────────
// 6 mô thức hành vi cốt lõi trong hệ thống Bản đồ Nội Tâm AIMIND

export const archetypes: Record<ArchetypeKey, ArchetypeProfile> = {
  "lo-au": {
    key: "lo-au",
    name: "Xu hướng Lo Âu",
    tagline: "Bạn gắn kết sâu sắc và có thể nhạy cảm với dấu hiệu xa cách",
    description:
      "Kết quả hiện tại gợi ý rằng bạn có thể coi trọng sự gắn kết và nhạy cảm với những thay đổi trong mối quan hệ. Khi chưa nhận được phản hồi hoặc cảm thấy khoảng cách, bạn có thể cần thêm sự xác nhận để cảm thấy yên tâm.",
    coreWound:
      "Một cách để quan sát xu hướng này là chú ý những tình huống khiến bạn nhanh chóng diễn giải sự im lặng hoặc khoảng cách như dấu hiệu mình sắp bị bỏ lại.",
    hiddenFear:
      "Trong một số tình huống, bạn có thể lo rằng mình chưa đủ quan trọng hoặc mối quan hệ không còn an toàn như trước.",
    behaviorPattern: [
      "Hay kiểm tra tin nhắn, cần phản hồi nhanh để cảm thấy an toàn",
      "Khi bị phớt lờ — dù một chút — cảm giác lo âu bùng lên ngay",
      "Có thể tìm thêm sự xác nhận khi cảm thấy mối quan hệ không ổn",
      "Hay tưởng tượng kịch bản tệ nhất khi có dấu hiệu bất ổn",
      "Có thể muốn giải quyết ngay khi xuất hiện khoảng cách hoặc xung đột",
    ],
    strengths: [
      "Khả năng chú ý sớm đến những thay đổi trong mối quan hệ",
      "Sẵn sàng tìm kiếm kết nối khi cảm thấy bất an",
      "Có thể diễn đạt rõ nhu cầu được phản hồi và trấn an",
    ],
    growthEdge:
      "Quan sát lúc nhu cầu được trấn an xuất hiện và thử phân biệt điều đang xảy ra với kịch bản bạn đang lo lắng.",
    nextStep:
      "Bạn có thể đọc thêm hoặc học chuyên sâu để quan sát cách xu hướng này xuất hiện trong từng bối cảnh cụ thể.",
    color: "#7C6FF7",
    icon: "🌊",
  },

  "ne-tranh": {
    key: "ne-tranh",
    name: "Xu hướng Né Tránh",
    tagline: "Nhu cầu về không gian có thể giúp bạn giữ cảm giác an toàn và tự chủ",
    description:
      "Kết quả hiện tại gợi ý rằng bạn có thể trân trọng sự độc lập và không gian cá nhân. Khi cảm thấy áp lực hoặc quá gần, bạn có xu hướng lùi lại để tự bảo vệ, ngay cả khi vẫn mong muốn kết nối.",
    coreWound:
      "Một cách để quan sát xu hướng này là chú ý khi nào việc dựa vào người khác gợi lên cảm giác không chắc chắn và khi nào tự chủ trở thành lựa chọn quen thuộc.",
    hiddenFear:
      "Trong một số tình huống, bạn có thể lo rằng sự gần gũi sẽ làm giảm không gian riêng hoặc khiến mình dễ bị tổn thương.",
    behaviorPattern: [
      "Khi cảm xúc leo thang, bạn rút lui về không gian riêng",
      "Khó nói 'tôi cần bạn' — ngay cả khi đó là sự thật",
      "Có thể tiếp tục làm việc và để cảm xúc xử lý sau",
      "Trong mối quan hệ, bạn có thể cần khoảng lùi để tự xử lý",
      "Có xu hướng tự giải quyết khó khăn trước khi tìm đến người khác",
    ],
    strengths: [
      "Tự chủ và khả năng giải quyết vấn đề độc lập",
      "Có thể tập trung vào giải pháp khi gặp khó khăn",
      "Nhận biết khá rõ nhu cầu về không gian cá nhân",
    ],
    growthEdge:
      "Quan sát lúc bạn muốn lùi lại và thử nhận biết mình đang cần không gian, sự rõ ràng hay một cách kết nối an toàn hơn.",
    nextStep:
      "Bạn có thể đọc thêm hoặc học chuyên sâu để quan sát nhu cầu về khoảng cách và kết nối trong đời sống thực tế.",
    color: "#18B5B0",
    icon: "🏔️",
  },

  "kiem-soat": {
    key: "kiem-soat",
    name: "Xu hướng Kiểm Soát",
    tagline: "Sự chuẩn bị kỹ có thể giúp bạn cảm thấy vững vàng trước điều chưa chắc chắn",
    description:
      "Kết quả hiện tại gợi ý rằng bạn có thể đặt tiêu chuẩn cao, coi trọng kế hoạch và muốn hạn chế rủi ro. Khi mọi việc không rõ ràng hoặc lệch khỏi dự kiến, bạn có thể thấy khó thư giãn.",
    coreWound:
      "Một cách để quan sát xu hướng này là chú ý khi nào việc lập kế hoạch hỗ trợ bạn và khi nào nhu cầu chắc chắn khiến bạn khó thích nghi với thay đổi.",
    hiddenFear:
      "Trong một số tình huống, bạn có thể lo mình sẽ không xử lý tốt nếu kế hoạch thay đổi hoặc kết quả không đạt tiêu chuẩn mong muốn.",
    behaviorPattern: [
      "Có thể lập kế hoạch kỹ để giảm bớt điều chưa chắc chắn",
      "Hay lo lắng về tương lai, lên kế hoạch cho mọi kịch bản",
      "Phê phán bản thân rất nặng khi mắc sai lầm",
      "Khó buông bỏ khi mọi thứ không đi theo dự kiến",
      "Có thể tiếp tục tập trung vào công việc và để cảm xúc xử lý sau",
    ],
    strengths: [
      "Khả năng lập kế hoạch và chuẩn bị kỹ",
      "Chú ý đến rủi ro và những chi tiết có thể ảnh hưởng kết quả",
      "Có xu hướng tập trung vào giải pháp khi gặp khó khăn",
    ],
    growthEdge:
      "Quan sát lúc nhu cầu kiểm soát tăng lên và thử phân biệt điều thực sự cần chuẩn bị với điều có thể để linh hoạt.",
    nextStep:
      "Bạn có thể đọc thêm hoặc học chuyên sâu để quan sát cách mình phản ứng trước sai sót, thay đổi và điều chưa chắc chắn.",
    color: "#5B4FD4",
    icon: "⚡",
  },

  "hy-sinh": {
    key: "hy-sinh",
    name: "Xu hướng Hy Sinh",
    tagline: "Bạn quan tâm đến người khác và đôi khi để nhu cầu của mình lại phía sau",
    description:
      "Kết quả hiện tại gợi ý rằng bạn có thể quan tâm sâu sắc đến nhu cầu của người khác và sẵn sàng giúp đỡ. Trong một số tình huống, việc nói 'không' hoặc ưu tiên bản thân có thể khiến bạn không thoải mái.",
    coreWound:
      "Một cách để quan sát xu hướng này là chú ý khi nào bạn đồng ý vì thật sự muốn giúp và khi nào bạn đồng ý vì lo người khác thất vọng.",
    hiddenFear:
      "Trong một số tình huống, bạn có thể lo rằng việc từ chối hoặc bộc lộ nhu cầu riêng sẽ ảnh hưởng đến sự gắn kết với người khác.",
    behaviorPattern: [
      "Rất khó nói 'không' — dù trong lòng đang mệt mỏi",
      "Hay cảm thấy tội lỗi khi nghĩ đến nhu cầu của bản thân",
      "Thường biết người khác cần gì trước khi biết mình cần gì",
      "Hay cảm thấy kiệt sức nhưng vẫn tiếp tục cho đi",
      "Có thể đồng ý giúp dù trong lòng không thật sự muốn",
    ],
    strengths: [
      "Sẵn sàng quan tâm và hỗ trợ người khác",
      "Chú ý đến nhu cầu của những người xung quanh",
      "Coi trọng sự gắn kết trong các mối quan hệ",
    ],
    growthEdge:
      "Quan sát lúc bạn bỏ qua nhu cầu của mình và thử dành cho bản thân cùng sự quan tâm mà bạn thường dành cho người khác.",
    nextStep:
      "Bạn có thể đọc thêm hoặc học chuyên sâu để quan sát ranh giới, nhu cầu và cách cho đi phù hợp với hoàn cảnh.",
    color: "#E67E74",
    icon: "🌸",
  },

  "tu-huy": {
    key: "tu-huy",
    name: "Xu hướng Tự Hủy",
    tagline: "Bạn có thể chững lại hoặc đổi hướng khi điều mình muốn trở nên quan trọng",
    description:
      "Kết quả hiện tại gợi ý rằng bạn có thể trì hoãn, mất đà, khó duy trì điều mình muốn hoặc làm gián đoạn tiến trình khi nó trở nên quan trọng. Nguyên nhân có thể khác nhau và cần được xem như một giả thuyết để tiếp tục quan sát.",
    coreWound:
      "Một cách để quan sát xu hướng này là chú ý điều gì thường xuất hiện ngay trước lúc bạn trì hoãn, mất đà hoặc khó tiếp nhận một kết quả tích cực.",
    hiddenFear:
      "Trong một số tình huống, cảm giác mình chưa đủ tốt hoặc không xứng đáng có thể xuất hiện. Đây là một khả năng để quan sát, không phải nguyên nhân đã được bài test xác định.",
    behaviorPattern: [
      "Trì hoãn ngay trước deadline quan trọng",
      "Chọn những mối quan hệ không phù hợp dù biết rõ",
      "Hay tự phê phán rất nặng nề",
      "Khởi đầu nhiều thứ nhưng ít hoàn thành",
      "Hay phá vỡ điều tốt khi nó bắt đầu đi đúng hướng",
    ],
    strengths: [
      "Khả năng nhận ra những lúc mình đang trì hoãn hoặc mất đà",
      "Sự thành thật khi nhìn vào điều mình muốn thay đổi",
      "Có thể quan sát rõ hơn các thời điểm tiến trình bị gián đoạn",
    ],
    growthEdge:
      "Quan sát thời điểm bạn bắt đầu chững lại và thử chia bước tiếp theo thành một lựa chọn nhỏ, cụ thể hơn.",
    nextStep:
      "Bạn có thể đọc thêm hoặc học chuyên sâu để quan sát điều gì thường xuất hiện ngay trước lúc mình mất đà.",
    color: "#3B3772",
    icon: "🔥",
  },

  "can-bang": {
    key: "can-bang",
    name: "Xu hướng Cân Bằng",
    tagline: "Câu trả lời hiện tại cho thấy nhiều phản ứng tương đối linh hoạt hoặc thích nghi",
    description:
      "Kết quả hiện tại gợi ý rằng bạn đã chọn nhiều cách phản ứng tương đối linh hoạt hoặc phù hợp với hoàn cảnh. Điều này không có nghĩa bạn không có những xu hướng khác; chúng vẫn có thể xuất hiện rõ hơn trong từng bối cảnh cụ thể.",
    coreWound:
      "Một cách để quan sát kết quả này là chú ý những bối cảnh bạn có thể cân nhắc, điều chỉnh hoặc giao tiếp rõ ràng, đồng thời nhận ra những tình huống vẫn tạo phản ứng mạnh.",
    hiddenFear:
      "Một xu hướng cụ thể vẫn có thể trở nên rõ hơn tùy tình huống. Điểm Cân Bằng không khẳng định rằng mọi phản ứng của bạn đều cân bằng như nhau.",
    behaviorPattern: [
      "Có thể cân nhắc phản hồi trước khi quyết định điều chỉnh",
      "Có thể đặt mục tiêu linh hoạt và thay đổi theo hoàn cảnh",
      "Có thể trình bày quan điểm đồng thời lắng nghe phía bên kia",
    ],
    strengths: [
      "Khả năng cân nhắc dựa trên hoàn cảnh cụ thể",
      "Có thể điều chỉnh mục tiêu hoặc phản ứng khi cần",
      "Có thể tiếp nhận phản hồi mà không phải phản ứng ngay",
    ],
    growthEdge:
      "Quan sát sự khác biệt giữa các bối cảnh để nhận ra lúc nào một xu hướng cụ thể trở nên rõ hơn.",
    nextStep:
      "Bạn có thể đọc thêm hoặc học chuyên sâu để tiếp tục quan sát những thay đổi theo từng bối cảnh đời sống.",
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
