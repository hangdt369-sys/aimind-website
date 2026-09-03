import type { ArchetypeKey, TestQuestion } from "@/types";

// ─── AIMIND Bài Test Bản Đồ Nội Tâm ────────────────────────────────────────
// 20 câu — đánh giá 6 mô thức hành vi
// Hanna Dang có thể chỉnh sửa câu hỏi và điểm số ở đây

export const testQuestions: TestQuestion[] = [
  // ── Nhóm 1: Cảm xúc trong mối quan hệ ──
  {
    id: "q1",
    text: "Khi người thân/người yêu không trả lời tin nhắn của bạn trong vài giờ, bạn thường...",
    options: [
      {
        value: 1,
        label: "Không để ý lắm, họ chắc đang bận",
        archetypeScores: { "ne-tranh": 2, "can-bang": 1 },
      },
      {
        value: 2,
        label: "Thoáng lo nhưng tiếp tục làm việc khác",
        archetypeScores: { "can-bang": 2 },
      },
      {
        value: 3,
        label: "Hay kiểm tra điện thoại và tự hỏi có chuyện gì không",
        archetypeScores: { "lo-au": 2, "kiem-soat": 1 },
      },
      {
        value: 4,
        label: "Bắt đầu lo lắng và tưởng tượng nhiều kịch bản",
        archetypeScores: { "lo-au": 3, "kiem-soat": 2 },
      },
    ],
  },
  {
    id: "q2",
    text: "Trong mối quan hệ thân thiết, điều nào mô tả bạn nhất?",
    options: [
      {
        value: 1,
        label: "Tôi cần không gian cá nhân nhiều — thân thiết quá cảm thấy ngột ngạt",
        archetypeScores: { "ne-tranh": 3 },
      },
      {
        value: 2,
        label: "Tôi hay lo sợ người quan trọng sẽ rời bỏ mình",
        archetypeScores: { "lo-au": 3 },
      },
      {
        value: 3,
        label: "Tôi luôn cố gắng làm mọi thứ đúng để mối quan hệ không vỡ",
        archetypeScores: { "kiem-soat": 3, "lo-au": 1 },
      },
      {
        value: 4,
        label: "Tôi thường cho đi nhiều hơn nhận lại",
        archetypeScores: { "hy-sinh": 3 },
      },
    ],
  },
  {
    id: "q3",
    text: "Khi ai đó phê bình bạn — dù nhẹ nhàng — phản ứng đầu tiên của bạn là?",
    options: [
      {
        value: 1,
        label: "Phòng thủ và muốn chứng minh mình đúng",
        archetypeScores: { "kiem-soat": 2, "ne-tranh": 1 },
      },
      {
        value: 2,
        label: "Tự chỉ trích rất nặng nề, nghĩ mãi về điều đó",
        archetypeScores: { "lo-au": 2, "tu-huy": 2 },
      },
      {
        value: 3,
        label: "Xin lỗi ngay, sợ người ta không vui với mình",
        archetypeScores: { "hy-sinh": 3, "lo-au": 1 },
      },
      {
        value: 4,
        label: "Nghe, xem xét, và quyết định có phải điều chỉnh không",
        archetypeScores: { "can-bang": 3 },
      },
    ],
  },

  // ── Nhóm 2: Hành vi với bản thân ──
  {
    id: "q4",
    text: "Khi có một dự án hoặc mục tiêu quan trọng, bạn thường...",
    options: [
      {
        value: 1,
        label: "Lên kế hoạch chi tiết và làm từng bước một cách kỹ càng",
        archetypeScores: { "kiem-soat": 3 },
      },
      {
        value: 2,
        label: "Bắt đầu hứng khởi rồi trì hoãn hoặc dừng lại giữa chừng",
        archetypeScores: { "tu-huy": 3 },
      },
      {
        value: 3,
        label: "Làm tốt nhưng hay lo lắng về những thứ có thể đi sai",
        archetypeScores: { "kiem-soat": 2, "lo-au": 1 },
      },
      {
        value: 4,
        label: "Đặt mục tiêu linh hoạt và điều chỉnh theo hoàn cảnh",
        archetypeScores: { "can-bang": 2 },
      },
    ],
  },
  {
    id: "q5",
    text: "Câu nào mô tả đúng nhất cảm giác của bạn về bản thân?",
    options: [
      {
        value: 1,
        label: "Tôi biết mình có giá trị nhưng đôi khi vẫn nghi ngờ",
        archetypeScores: { "can-bang": 2, "lo-au": 1 },
      },
      {
        value: 2,
        label: "Tôi hay cảm thấy mình chưa đủ tốt dù người khác nói ngược lại",
        archetypeScores: { "lo-au": 2, "tu-huy": 2 },
      },
      {
        value: 3,
        label: "Tôi ổn khi ở một mình nhưng không chắc mình muốn gì trong quan hệ",
        archetypeScores: { "ne-tranh": 2 },
      },
      {
        value: 4,
        label: "Giá trị của tôi gắn liền với việc tôi làm được gì cho người khác",
        archetypeScores: { "hy-sinh": 3 },
      },
    ],
  },
  {
    id: "q6",
    text: "Khi cuộc sống đang đi đúng hướng và bạn sắp đạt được điều mình muốn...",
    options: [
      {
        value: 1,
        label: "Tôi vui mừng và tận hưởng",
        archetypeScores: { "can-bang": 3 },
      },
      {
        value: 2,
        label: "Tôi lo lắng có gì đó sẽ xảy ra phá vỡ mọi thứ",
        archetypeScores: { "kiem-soat": 2, "lo-au": 2 },
      },
      {
        value: 3,
        label: "Tôi không chắc mình xứng đáng với điều này",
        archetypeScores: { "tu-huy": 3 },
      },
      {
        value: 4,
        label: "Tôi tự nhiên làm gì đó phá vỡ nó mà không hiểu tại sao",
        archetypeScores: { "tu-huy": 4 },
      },
    ],
  },

  // ── Nhóm 3: Cảm xúc và cơ thể ──
  {
    id: "q7",
    text: "Khi bạn cảm thấy quá tải, bạn thường làm gì?",
    options: [
      {
        value: 1,
        label: "Rút lui vào không gian riêng, cần im lặng để phục hồi",
        archetypeScores: { "ne-tranh": 3 },
      },
      {
        value: 2,
        label: "Tìm ai đó để nói chuyện, cần được trấn an",
        archetypeScores: { "lo-au": 2 },
      },
      {
        value: 3,
        label: "Tiếp tục làm việc, cảm xúc để sau giải quyết",
        archetypeScores: { "ne-tranh": 2, "kiem-soat": 2 },
      },
      {
        value: 4,
        label: "Chăm sóc người khác — làm điều đó khiến tôi cảm thấy tốt hơn",
        archetypeScores: { "hy-sinh": 2 },
      },
    ],
  },
  {
    id: "q8",
    text: "Trong lịch sử các mối quan hệ của bạn, điều nào hay lặp lại?",
    options: [
      {
        value: 1,
        label: "Tôi hay chọn những người cần được 'cứu' hoặc cần mình giúp đỡ",
        archetypeScores: { "hy-sinh": 3, "lo-au": 1 },
      },
      {
        value: 2,
        label: "Tôi hay rơi vào mối quan hệ rồi lại thấy ngột ngạt và rút lui",
        archetypeScores: { "ne-tranh": 3 },
      },
      {
        value: 3,
        label: "Tôi hay lo lắng quá mức về việc mối quan hệ có ổn không",
        archetypeScores: { "lo-au": 3 },
      },
      {
        value: 4,
        label: "Tôi hay bắt đầu tốt rồi tự phá vỡ hoặc chọn người không phù hợp",
        archetypeScores: { "tu-huy": 3 },
      },
    ],
  },
  {
    id: "q9",
    text: "Khi ai đó cần sự giúp đỡ của bạn dù bạn đang mệt mỏi...",
    options: [
      {
        value: 1,
        label: "Tôi nói rõ rằng mình không có khả năng lúc này",
        archetypeScores: { "can-bang": 2, "ne-tranh": 1 },
      },
      {
        value: 2,
        label: "Tôi giúp — dù trong lòng không muốn",
        archetypeScores: { "hy-sinh": 3 },
      },
      {
        value: 3,
        label: "Tôi giúp vì không biết cách từ chối mà không cảm thấy tội lỗi",
        archetypeScores: { "hy-sinh": 3, "lo-au": 1 },
      },
      {
        value: 4,
        label: "Tôi cân nhắc và quyết định dựa trên hoàn cảnh cụ thể",
        archetypeScores: { "can-bang": 3 },
      },
    ],
  },

  // ── Nhóm 4: Hệ thần kinh và phản ứng ──
  {
    id: "q10",
    text: "Trong một cuộc xung đột, bạn thường...",
    options: [
      {
        value: 1,
        label: "Muốn giải quyết ngay — không chịu được sự không rõ ràng",
        archetypeScores: { "kiem-soat": 3, "lo-au": 1 },
      },
      {
        value: 2,
        label: "Cần thời gian để xử lý một mình trước khi nói chuyện",
        archetypeScores: { "ne-tranh": 3 },
      },
      {
        value: 3,
        label: "Xin lỗi trước dù không chắc mình sai để giải quyết nhanh",
        archetypeScores: { "hy-sinh": 2, "lo-au": 2 },
      },
      {
        value: 4,
        label: "Trình bày quan điểm và lắng nghe phía bên kia",
        archetypeScores: { "can-bang": 3 },
      },
    ],
  },
  {
    id: "q11",
    text: "Khi nghĩ về tương lai, cảm giác chủ đạo của bạn là...",
    options: [
      {
        value: 1,
        label: "Lo lắng — có quá nhiều thứ có thể xảy ra",
        archetypeScores: { "lo-au": 2, "kiem-soat": 2 },
      },
      {
        value: 2,
        label: "Không chắc — tôi hay bắt đầu nhưng không về đích",
        archetypeScores: { "tu-huy": 3 },
      },
      {
        value: 3,
        label: "Ổn định — tôi có kế hoạch và đang làm theo",
        archetypeScores: { "kiem-soat": 2, "can-bang": 1 },
      },
      {
        value: 4,
        label: "Tập trung vào hiện tại — tương lai sẽ tính sau",
        archetypeScores: { "ne-tranh": 1, "can-bang": 2 },
      },
    ],
  },
  {
    id: "q12",
    text: "Điều nào bạn khó nói nhất với người thân thiết?",
    options: [
      {
        value: 1,
        label: "'Tôi cần bạn'",
        archetypeScores: { "ne-tranh": 3 },
      },
      {
        value: 2,
        label: "'Tôi không muốn làm điều đó'",
        archetypeScores: { "hy-sinh": 3 },
      },
      {
        value: 3,
        label: "'Tôi đã sai'",
        archetypeScores: { "kiem-soat": 3 },
      },
      {
        value: 4,
        label: "'Tôi sợ bạn sẽ rời bỏ tôi'",
        archetypeScores: { "lo-au": 3 },
      },
    ],
  },

  // ── Nhóm 5: Niềm tin và quyết định ──
  {
    id: "q13",
    text: "Niềm tin nào bạn ngầm giữ về bản thân (ngay cả khi biết nó không hoàn toàn đúng)?",
    options: [
      {
        value: 1,
        label: "Tôi phải tự mình làm mọi thứ — không thể dựa vào ai",
        archetypeScores: { "ne-tranh": 3 },
      },
      {
        value: 2,
        label: "Nếu tôi không đủ tốt, người ta sẽ bỏ tôi",
        archetypeScores: { "lo-au": 3 },
      },
      {
        value: 3,
        label: "Mình không xứng đáng với những điều tốt đẹp",
        archetypeScores: { "tu-huy": 3 },
      },
      {
        value: 4,
        label: "Nhu cầu của mình không quan trọng bằng nhu cầu người khác",
        archetypeScores: { "hy-sinh": 3 },
      },
    ],
  },
  {
    id: "q14",
    text: "Khi được khen ngợi hoặc được công nhận, bạn thường...",
    options: [
      {
        value: 1,
        label: "Vui nhưng ngay lập tức nghi ngờ họ có thật sự ý đó không",
        archetypeScores: { "lo-au": 2, "tu-huy": 1 },
      },
      {
        value: 2,
        label: "Khó tiếp nhận — cảm thấy không thoải mái hoặc xấu hổ",
        archetypeScores: { "tu-huy": 2, "ne-tranh": 1 },
      },
      {
        value: 3,
        label: "Vui mừng và dùng nó làm động lực",
        archetypeScores: { "can-bang": 3 },
      },
      {
        value: 4,
        label: "Cảm ơn nhưng ngay lập tức tự nhắc mình còn nhiều chỗ chưa đủ",
        archetypeScores: { "kiem-soat": 2, "tu-huy": 1 },
      },
    ],
  },
  {
    id: "q15",
    text: "Câu nào gần nhất với cách bạn cảm nhận về cuộc sống hiện tại?",
    options: [
      {
        value: 1,
        label: "Tôi đang làm đúng những gì cần làm nhưng không thấy vui",
        archetypeScores: { "ne-tranh": 2, "tu-huy": 1 },
      },
      {
        value: 2,
        label: "Tôi hay lo lắng rằng mọi thứ có thể đổ vỡ bất cứ lúc nào",
        archetypeScores: { "lo-au": 3, "kiem-soat": 1 },
      },
      {
        value: 3,
        label: "Tôi đang cố gắng nhưng cảm thấy mình đang chạy mà không đến đích",
        archetypeScores: { "tu-huy": 2, "lo-au": 1 },
      },
      {
        value: 4,
        label: "Tôi ổn nhưng cảm thấy có gì đó sâu bên trong chưa được giải quyết",
        archetypeScores: { "can-bang": 2, "ne-tranh": 1 },
      },
    ],
  },

  // ── Nhóm 6: Nguồn gốc mô thức ──
  {
    id: "q16",
    text: "Khi còn nhỏ, cách gia đình bạn thể hiện tình yêu thương là...",
    options: [
      {
        value: 1,
        label: "Không nhất quán — đôi khi ấm áp, đôi khi xa cách hoặc không có",
        archetypeScores: { "lo-au": 3 },
      },
      {
        value: 2,
        label: "Ít thể hiện — tình yêu thương qua hành động, không phải lời nói",
        archetypeScores: { "ne-tranh": 2 },
      },
      {
        value: 3,
        label: "Gắn liền với thành tích — được khen khi làm tốt, bị phê khi sai",
        archetypeScores: { "kiem-soat": 3, "tu-huy": 1 },
      },
      {
        value: 4,
        label: "Ấm áp nhưng hay lo lắng, hay nhắc nhở về những nguy hiểm",
        archetypeScores: { "lo-au": 2, "hy-sinh": 1 },
      },
    ],
  },
  {
    id: "q17",
    text: "Điều nào khiến bạn cảm thấy an toàn nhất?",
    options: [
      {
        value: 1,
        label: "Biết rằng người quan trọng đang ở đây và sẽ không đi đâu",
        archetypeScores: { "lo-au": 3 },
      },
      {
        value: 2,
        label: "Có không gian và tự do để làm theo cách của mình",
        archetypeScores: { "ne-tranh": 3 },
      },
      {
        value: 3,
        label: "Mọi thứ đang theo kế hoạch và trong tầm kiểm soát",
        archetypeScores: { "kiem-soat": 3 },
      },
      {
        value: 4,
        label: "Được cần đến và cảm thấy mình đang đóng góp",
        archetypeScores: { "hy-sinh": 3 },
      },
    ],
  },
  {
    id: "q18",
    text: "Khi bạn trải qua một giai đoạn khó khăn, bạn thường...",
    options: [
      {
        value: 1,
        label: "Giải quyết một mình và không muốn làm phiền người khác",
        archetypeScores: { "ne-tranh": 3 },
      },
      {
        value: 2,
        label: "Cần ai đó ở cạnh và nói chuyện liên tục",
        archetypeScores: { "lo-au": 3 },
      },
      {
        value: 3,
        label: "Tập trung vào giải pháp và hành động thay vì cảm xúc",
        archetypeScores: { "kiem-soat": 2, "ne-tranh": 1 },
      },
      {
        value: 4,
        label: "Chăm sóc người khác để quên đi nỗi đau của mình",
        archetypeScores: { "hy-sinh": 2, "ne-tranh": 1 },
      },
    ],
  },
  {
    id: "q19",
    text: "Nếu bạn có thể thay đổi một điều về cách bạn đang sống, đó sẽ là...",
    options: [
      {
        value: 1,
        label: "Ngừng lo lắng và tin tưởng hơn vào cuộc sống",
        archetypeScores: { "lo-au": 2, "kiem-soat": 1 },
      },
      {
        value: 2,
        label: "Kết nối thật sự với người khác mà không sợ mất đi bản thân",
        archetypeScores: { "ne-tranh": 2 },
      },
      {
        value: 3,
        label: "Ngừng phá vỡ những điều tốt đẹp đang đến",
        archetypeScores: { "tu-huy": 3 },
      },
      {
        value: 4,
        label: "Học cách đặt bản thân mình lên trước",
        archetypeScores: { "hy-sinh": 3 },
      },
    ],
  },
  {
    id: "q20",
    text: "Câu nào bạn hay tự nói với mình nhất?",
    options: [
      {
        value: 1,
        label: "'Tại sao mình lại như vậy?' hoặc 'Mình phải thay đổi'",
        archetypeScores: { "tu-huy": 2, "lo-au": 1 },
      },
      {
        value: 2,
        label: "'Mình ổn. Mình không cần ai.'",
        archetypeScores: { "ne-tranh": 3 },
      },
      {
        value: 3,
        label: "'Mình phải làm tốt hơn nữa.'",
        archetypeScores: { "kiem-soat": 3 },
      },
      {
        value: 4,
        label: "'Hy vọng họ không tức giận với mình.'",
        archetypeScores: { "hy-sinh": 2, "lo-au": 2 },
      },
    ],
  },
];

// Maximum attainable score for each archetype, derived from the current questions.
export const MAX_SCORE_BY_ARCHETYPE = testQuestions.reduce<Record<ArchetypeKey, number>>(
  (totals, question) => {
    (Object.keys(totals) as ArchetypeKey[]).forEach((key) => {
      const questionMax = Math.max(
        0,
        ...question.options.map((option) => option.archetypeScores[key] ?? 0)
      );
      totals[key] += questionMax;
    });

    return totals;
  },
  {
    "lo-au": 0,
    "ne-tranh": 0,
    "kiem-soat": 0,
    "hy-sinh": 0,
    "tu-huy": 0,
    "can-bang": 0,
  }
);

export const TOTAL_QUESTIONS = testQuestions.length;
